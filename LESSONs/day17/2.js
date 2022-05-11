// map은 객체가 구려서 나왔다 ㅋㅋㅋ

// 자스에서 메서드를 추가/수정 할 수 없어서 나온 것이 바로 Map
// {'하나':1, '둘':2, '셋':3}같은 것을 MAp으로 만들기

let m = new Map();
m.set('하나', 1); // 하나가 키, 1이 값으로 묶여 쌍을 이룬다.
m.set('둘', 2); 
m.set('셋', 3); 

console.log(m);

// 오브젝트 순환은 in만 가능하다.
for(let i in object){
  console.log(i);
}

// 근데 냅은 of로 순환 가능하다.
for(let i of m){
  console.log(i);
}

// //
// Object.values(변수명); <- 같이 불편하게 값을 조회했어야 됐는데 Map을 사용함으로써
// 변수명.values(); <-와 같이 사용이 편해졌다.

// /////////////////////////////////////////////////////
console.clear();
let map = new Map();
m.set('one', 1);
m.set('two', 2);
m.set('three', 3);
// set은 집어 넣기, get은 조회
m.get('one');
m.get('two');
m.get('three');