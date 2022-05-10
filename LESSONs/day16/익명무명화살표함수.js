function test1(){
  return 'one';
}

let test2 = function() {
  return 'two';
}

let test3 = () => 'three';

console.log(test1());
console.log(test2());
console.log(test3());
console.log();

console.log(test1.name);
console.log(test2.name);
console.log(test3.name);