// var x = 10;
// function test(){
//   var x = 100;
//   console.log(x);

//   function test2(){
//     var x = 1000;
//     console.log(x);
//   }
//   test2();
// }
// test();



// var y = 100;
// function test3(){
//   var y = 200;
//   console.log(y);
//   function test3(){
//     console.log(y);
//   }
//   test3();
// }
// test3();



// let 콘솔 = console.log;
// 콘솔('와우');
// //콘솔(와우);
// // 콘솔;
// 콘솔(3);

function 제곱(x) {
  function 승수(y) {
    return y ** x
  }
  return 승수
}
let 클로저 = 제곱(6);
// 클로저 == 승수 가 되는 것!
/*
클로저는
function 승수(y) {
    return y ** 6;
  }
  를 갖게 된다.
*/
클로저(5);


// let x = 100;
// function a (){
//   let x = 1;
//   b();

// }

// function b(){
//   console.log(x);
// }
// a();
// b();
