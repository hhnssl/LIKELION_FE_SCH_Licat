const tree =  {
  root:{
    value:55,
    left:{
      value: 30,
      left: {
        value: 25,
        left: 21,
        right: null,
      },
      right: {
        value: 37,
        left: null,
        right: null,
      }
    },
    right:{
      value: 70,
      left: null,
      right: {
        value: 77,
        left: {
          value: 75,
          left: null,
          right: null,
        },
        right: {
          value: 80,
          left: null,
          right: null
        }
      }
    }
  }
}

console.log(tree.root.value);
console.log(tree.root.right.right.value);
// Object 나 arrary(기존자료형)으로 tree나 linked list를 구현할 수 있는데 왜 class로 구현할까?
// 1. 더 light한 모델을 만들기 위해(불필요한 메소드나 프로퍼티가 없어서)
// 2. 확장성
// 3. OOP(객체지향프로그래밍)의 철학에 맞기 때문에
