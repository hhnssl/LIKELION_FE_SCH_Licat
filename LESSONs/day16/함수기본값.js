function test(a= 10, b= 20, c = 30){
  return a, b, c;
}
console.log(test());

// 

function test2(a= 10, b= 20, c = 30){
  return [a, b, c];
}
console.log(test2());
