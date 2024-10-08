import React, { useState, useRef, useEffect } from "react";
import styles from "./TemperatureGauge.module.css";

interface ColorScale {
  temp: number;
  color: string;
  fontColor: "white" | "black" | "transparent";
}

const colorScale: ColorScale[] = [
  { temp: 2.8, color: "#0000FF", fontColor: "white" },
  { temp: 3.6, color: "#3366FF", fontColor: "white" },
  { temp: 4.5, color: "#33CCFF", fontColor: "white" },
  { temp: 5.3, color: "#33FFFF", fontColor: "black" },
  { temp: 6.2, color: "#33FF66", fontColor: "black" },
  { temp: 7.0, color: "#FFFF00", fontColor: "black" },
  { temp: 7.8, color: "#FF9900", fontColor: "black" },
  { temp: 8.7, color: "#FF6600", fontColor: "black" },
  { temp: 9.5, color: "#FF0000", fontColor: "white" },
  { temp: 0, color: "#960000", fontColor: "transparent" },
];

const TemperatureGauge: React.FC = () => {
  const [dotPosition, setDotPosition] = useState(0);
  const gaugeRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateDotPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      updateDotPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const updateDotPosition = (clientX: number) => {
    if (gaugeRef.current) {
      const rect = gaugeRef.current.getBoundingClientRect();
      const gaugeLeft = rect.left;
      const gaugeRight = rect.right;
      const newPosition = Math.max(gaugeLeft, Math.min(clientX, gaugeRight));
      const percentage = ((newPosition - gaugeLeft) / rect.width) * 100;
      setDotPosition(percentage);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`d-flex flex-column flex-md-row align-items-center ${styles.container}`}
    >
      <div
        className={`d-flex justify-content-center align-items-center mb-3 mb-md-0 ${styles.iconContainer}`}
      >
        <div
          className={`d-flex justify-content-center align-items-center bg-white ${styles.icon}`}
        >
          <i
            className={`fa-solid fa-play d-flex justify-content-center align-items-center ${styles.iconInner}`}
          ></i>
        </div>
      </div>
      <div className={`flex-grow-1 position-relative ${styles.gaugeContainer}`}>
        <div
          className={`d-flex justify-content-center align-items-center position-relative ${styles.gauge}`}
          ref={gaugeRef}
          onMouseDown={handleMouseDown}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
            <div
              className={`position-relative w-100 mx-4 ${styles.gaugeInner}`}
            >
              <div
                className={`position-absolute d-flex ${styles.gaugeLine}`}
              ></div>
              <div
                className={styles.dot}
                style={{
                  left: `${dotPosition}%`,
                }}
              ></div>
              <div
                className={`d-flex justify-content-center align-items-center px-3 ${styles.label}`}
                style={{
                  left: `${dotPosition}%`,
                }}
              >
                현재
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureGauge;
