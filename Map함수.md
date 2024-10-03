### Map함수

Map 함수의 정의

키와 값의 쌍으로 저장되는 자료구조 입니다.
원래 삽입 순서를 기억합니다.

#### Map의 프로퍼티

```js
const map = new Map(); //맵을 만듭니다.
map.set(key, value); //key를 사용해 value를 저장합니다.
map.get(key); // key에 해당하는 값을 반환합니다.
//key가 없다면 undefined를 반환합니다.
map.has(key); // key가 존재한다면 true
map.delete(key); // key에 해당하는 값을 삭제
map.clear(); //맵 안의 모든 요소를 제거합니다.
map.size; //맵의 개수를 반환합니다.
```

예시

```js
const map = new Map();

map.set("1", "str1"); //문자형 키
map.set(1, "num1");
alert(map.get(1)); //;num1
```

객체는 키를 문자형으로 변환하지만,
map의 키는 타입을 변환하지 않고 그대로 기억합니다.

### 맵은 키로 객체를 허용합니다.

```js
let john = { name: "John" };

let visitsCountMap = new Map();
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); //123
```

#### 체이닝

map.set을 호출할 때마다 맵 자신이 반환됩니다.
이를 이용하면 map.set을 체이닝할 수 있습니다.

```js
map.set("1", "str1").set(1, "num1").set(true, "bool1");
```

### 맵 요소에 반복 작업하기

map.keys() //각 요소의 키를 모은 반복 가능한 객체를 반환
map.values() //각 요소의 값을 모은 이터러블 객체 반환
map.entries() //요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환
이것은 for ..of 반복문의 기초로 쓰임

```js
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  alert(vegetable);
}

for (let amount of recipeMap.values()) {
  alert(amount);
}

for (let entry of recipeMap) {
  alert(entry); // cucumber, 500 ...
}

recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`);
});
```

### Object.enteries : 객체를 맵으로 바꾸기

```js
let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

alert(map.get("1"));
```

### Object.fromEntries : 맵을 객체로 바꾸기

```js
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

alert(prices.orange);
```
