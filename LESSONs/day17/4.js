// bind() => this를 전달한 함수를 반환해서 () 로 호출해야하고 => 결과값: 함수?
// call() => this를 전달한 함수를 () 로 실행해버려서 리턴값이 나온다! => 결과값: 값?

var peter = {
  name : 'Peter Parker',
  age: 100,
  sayName : function(){    
		console.log(this.name);
    console.log(this.age);
	}
}

var hansol = {
  name : 'hansol',
  age:200,
}

var ryan = {
  name : 'ryan',
  age:300,
}

peter.sayName.call(hansol);
peter.sayName.call(ryan);