// 1번. [10, 20, 30, 40] 값의 평균을 구하는 함수를 만들어주세요.
// let arr = [10, 20, 30, 40];
// console.log(getMean(arr));

function getMean(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  // console.log(arr.length);
  return sum / arr.length;
}
console.log(getMean([10, 20, 30, 40]));


// 2번. (나아가기) 숫자단위 콤마를 찍는 함수를 만들어주세요. 1000마다 콤마 찍기
// function comma(x){
//   for(let i = 0; i < )
// }



// 함수 연습문제 
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

// console.log(data.map(x => x.중간고사점수))
function 중간고사점수 (obj){
  let arr2 = [];
  // for(let i = 0; i < obj.length; i++){}
  console.log(obj[].length);
  return arr2;
}

console.log(data.map(x => [x.이름,x.중간고사점수]))