## Set함수

### Set함수의 정의

set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다.
셋에 키가 없는 값이 저장됩니다.

```js
new Set(iterable); // 셋을 만듭니다. 이터러블 객체를 전달받으면 그 안의 값을 복사해 셋에 넣어줍니다.
set.add(value); // 값을 추가하고 셋 자신을 반환합니다.
set.delete(value); //값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
set.has(value); //셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
set.clear(); //셋을 비웁니다.
set.size; //셋에 몇개의 값이 있는지 세줍니다.
```

셋에 있는 기존 값을 add를 한다면 아무런 반응이 없습니다.

```js
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(john);
set.add(mary);

alert(set.size); //3

for (let user of set) {
  alert(user.name); //John, Pete, Mary
}
```

### set.add(john); set.add(pete); set.add(mary);이 이후 john.name= "John2"라고 변경한 뒤 set.add(john); set.add(mary); set의 size는?

해당 경우에는 john의 참조값이 변경된 것이 아니므로 여전히 set의 size는 3이됩니다.
이유는 set은 객체의 참조를 비교하기 때문에 참조값이 변경되지 않고 내부의 참조값이 변경된 것이므로 다른 것이라고 보지 않기 때문입니다.

반대로 john = {name : 'John2'}라고 변경한다면
객체 리터럴 표기법으로 인한 새로운 객체가 생성되어 변수 john에 객체의 새로운 참조값이 할당되었으므로,
john의 값은 새로운 값으로 판단되어 set의 size는 4가 됩니다.

### 셋의 값에 반복 작업 하기

for ...of나 forEach를 사용하여 반복작업을 수행할 수 있습니다.

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

//forEach사용
set.forEach((value) => alert(value));
```

### 셋의 메서드

```js
set.keys(); //셋 내의 모든 값을 포함하는 이터러블 객체를 반환합니다.
set.values(); //set.keys()와 동일한 작업을 합니다. 맵과의 호환성을 위한 메서드입니다.
set.entries(); //셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들었습니다.
```

### 셋의 성능

has 메서드는 값이 Set에 있는지 여부를 판단합니다.
배열의 length와 Set의 size가 같을 때
Array.prototype.includes보다 평균적으로 더 빠릅니다.

### 수학적 연산 메서드

```js
A.difference(B); // A ∖ B
A.intersection(B); // A ∩ B
A.symmetricDifference(B); //(A∖B) ∪ (B∖A)
A.union(B); //A ∪ B
A.isDisjointFrom(B) //A ∩ B = ∅ 
A.isSubsetOf(B) //A ⊆ B
A.isSupersetOf(B) //A ⊇ B
```
