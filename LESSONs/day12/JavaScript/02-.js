document.getElementById('one').innerHTML =
  'hello <strong>world - document</strong>';
// innerHTML가 아니라 innerText로 넣으면 저 문자열 그대로 나온다.

console.log('hello world - console');
console.error('hello world - console error');

window.alert('hello world - alert');

//바로 문서에 입력시키기
document.write('<strong>hello!!</strong>world');
