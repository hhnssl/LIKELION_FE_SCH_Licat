let data = [{
  반 : 1, 
  번 : 1, 
  이름 : "호준", 
  중간고사점수 : 55
}, {
  반 : 1, 
  번 : 2, 
  이름 : "길동", 
  중간고사점수 : 60
}, {
  반 : 1, 
  번 : 3, 
  이름 : "영희", 
  중간고사점수 : 30
}, {
  반 : 1, 
  번 : 4, 
  이름 : "철수", 
  중간고사점수 : 20
}, {
  반 : 1, 
  번 : 5, 
  이름 : "규리", 
  중간고사점수 : 100
}]

// 1. 중간고사 점수를 하나의 array로 만들어주세요.
// console.log(data.map(x => x.중간고사점수));
let arr1 = [];
for(let i = 0; i < data.length; i++){
  arr1[i] = data[i]['중간고사점수'];
}
console.log(arr1);


// 2. 이름과 중간고사 점수를 하나의 array로 만들어주세요.
// console.log(data.map(x => [x.이름, x.중간고사점수]));
let arr2 = new Array(5);

for (var i = 0; i < arr2.length; i++) {
  arr2[i] = new Array(2);
}

for(let i = 0; i < 5; i++){
  arr2[i][0] = data[i]['이름'];
  arr2[i][1] = data[i]['중간고사점수'];
}
console.log(arr2);

// (나아가기) 3. 중간고사점수의 표준편차를 구해주세요. 또 어떻게 구하는 것이 효율적일지 고민해주세요.
let 합 = 0;
let 평균 = 0; //53
let 편차 = 0; //(각각의 값(변량)) - 평균 // 2 7 -23 -33 47
let 편차제곱의총합 = 0; // 3880
let 분산 = 0; // 편차제곱의총합 / 변량개수 // 776
let 표준편차 = 0; // 분산에 루트 씌운 것 //27.85677655436824

// 평균 구하기
for(let i = 0; i < arr1.length; i++){
  합 += arr1[i];
}
평균 = 합/arr1.length;

// 분산 구하기
for(let i = 0; i < arr1.length; i++){
  편차제곱의총합 += (arr1[i] - 평균) * (arr1[i] - 평균); 
}
분산 = 편차제곱의총합/arr1.length;

// 표준편차
표준편차 = Math.sqrt(분산);
console.log(표준편차);
