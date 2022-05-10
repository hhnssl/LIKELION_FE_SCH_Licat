// 함수의 아규먼트로 들어간 함수 = 콜백함수

function 함수(a, b, c){
  c(a+b);
}

함수(10, 100, console.log);