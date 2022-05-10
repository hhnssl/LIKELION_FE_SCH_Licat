// let [a, b, c] = [1, 2, 3, 4, 5];
// console.log(a,b, c);

// let {name2, age2} = {name2: 'hansol', height2: '20', age2: '30'};
// console.log(name2, age2);


// let [one, two, ...three] = [1, 2, 3, 4, 5, 6];

// console.log(one);
// console.log(two);
// console.log(three);

// [1, 10, 20, 30, 2] 로 만들기
// let a = [10, 20, 30];
// a.push(2); //뒤에 2 삽입
// console.log(a);
// a.unshift(1); // 앞에 1 삽입



// 전개
// let arr = [3, 5, 1, 10, 8, 7];
// console.log(Math.max(arr)); // NaN으로 나오는 이유: (3, 5, 1, 10, 8, 7) 이렇게 해야되는데 []이라서
// console.log(Math.max(...arr)); /// ...으로 []을 ()로 전개


// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(...arr1, ...arr2);
// console.log(Math.max(...arr1, ...arr2));


// let str = 'hello world';
// console.log([...str]);


// console.log('얍!'.repeat(100));
// console.log([...'!'.repeat(20)]);
// console.log([...'왁!'.repeat(20)]);



// let d = new Date();
// console.log(d);

// console.log(d.getDate());;
// console.log(d.getMonth() + 1);;
// console.log(d.getDay()); //일요일: 0


// 다음 arr를 문자열로 전환해서 각 자리수의 합 구하기
// 11 -> '11' -> '1', '1' -> 1 + 1과 같이 사고해야 한다.
var str = [11, 22, 33, 111, 2].join('');
let result = 0;
for (let i = 0; i < str.length; i++) {
  result += parseInt(str[i], 10);
}
console.log(result);