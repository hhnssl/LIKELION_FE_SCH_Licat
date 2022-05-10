// 즉시실행함수: 한번만 실행할 것(재사용 안할 거)

(function (){
  console.log('hello');
}());

// (
//   let x = 10;
//   let y = 20;
//   console.log(x+y);
// ) 실행안됨


( function d(){
  let x = 10;
  let y = 20;
  console.log(x+y);
}());