// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

// 연결리스트의 기본 형태
const list = {
  head: {
    value: 12, 
    next: {
      value: 99,
      next: {
        value: 37,
        next: null
      }
    }
  },
}
console.log(list.head.next.next.next);
console.log(list.head.next.next);


const list2 = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21, 
            next: null
          }
        }
      }
    }
  }
}
console.log(list2.head.next.next.next);

/* step 1 */
// 위와 같은 노드 생성을 클래스로 하기!!
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// 1. 각 노드들에 value
node1 = new Node(10);
node2 = new Node(20);
node3 = new Node(30);

// 2. 각 노드들의 next를 정해주기
node1.next = node2;
node2.next = node3;



/* step 2. 자동으로 다음 노드가 연결되는 링크드리스트 구현 */
class Node2 {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// head -> ['init', next]  
//              ↑
//             tail   와 같이 만들겠다.
class LinkedList{
  constructor(){
    let init = new Node2('init');
    this.head = init;
    this.tail = init;
  }


  append(data){
    let newNode = new Node2(data);

    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = newNode;
  }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);


console.log(l.head);
console.log(l.head.next.next.data);
console.log(l.head.next.next.next.data);




/* step 3: Length 구현*/
class Node3 {
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class LinkedList3 {
  constructor(){
      let init = new Node3('init');
      this.head = init;
      this.tail = init;

      this.데이터수 = 0;
  }

  길이(){
    return this.데이터수;
  }
  
  append(data){
      let 새로운노드 = new Node3(data);
      this.tail.next = 새로운노드;
      this.tail = 새로운노드;

      this.데이터수 += 1;
  }
}

let l3 = new LinkedList3()
l3.append(1);
l3.append(2);
l3.append(3);
l3.append(10);
l3.append(20);
l3.append(30);

l3.길이();



// step 4 toString 구현

class Node {
  constructor(data){
      this.data = data
      this.next = null
  }
}

class LinkedList {
  constructor(){
      let init = new Node('init')
      this.head = init
      this.tail = init

      this.데이터수 = 0
      this.데이터들 = ''
  }

  length(){
      return this.데이터수
  }

  toString(){
      // return 'hello world'
      // return '[1, 2, 3, 10, 20, 30]'
      
      // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
      return '[' + this.데이터들.slice(0, -2) + ']'

  }
  
  append(data){
      let 새로운노드 = new Node(data)
      this.tail.next = 새로운노드
      this.tail = 새로운노드

      this.데이터수 += 1
      this.데이터들 += `${data}, `
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 5 (중요) toString을 순회하면서 추가!!

class Node {
  constructor(data){
      this.data = data
      this.next = null
  }
}

class LinkedList {
  constructor(){
      let init = new Node('init')
      this.head = init
      this.tail = init

      this.데이터수 = 0
  }

  length(){
      return this.데이터수
  }

  toString(){
      let 순회용현재노드 = this.head
      순회용현재노드 = 순회용현재노드.next

      let 데이터들 = ''
      for (let i = 0; i < this.데이터수; i++) {
          데이터들 += `${순회용현재노드.data}, `
          순회용현재노드 = 순회용현재노드.next
      }

      return '[' + 데이터들.slice(0, -2) + ']'
  }
  
  append(data){
      let 새로운노드 = new Node(data)
      this.tail.next = 새로운노드
      this.tail = 새로운노드

      this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()


/* 7번 */
class Node {
  constructor(data){
      this.data = data
      this.next = null
  }
}

class LinkedList {
  constructor(){
      let init = new Node('init')
      this.head = init
      this.tail = init

      this.데이터수 = 0
  }

  length(){
      return this.데이터수
  }

  toString(){
      let 순회용현재노드 = this.head
      순회용현재노드 = 순회용현재노드.next

      let 데이터들 = ''
      for (let i = 0; i < this.데이터수; i++) {
          데이터들 += `${순회용현재노드.data}, `
          순회용현재노드 = 순회용현재노드.next
      }

      return '[' + 데이터들.slice(0, -2) + ']'
  }

  // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
  fullData(){
      return JSON.parse(this.toString())
  }
  
  append(data){
      let 새로운노드 = new Node(data)
      this.tail.next = 새로운노드
      this.tail = 새로운노드

      this.데이터수 += 1
  }

  insert(index, data){
      let 순회용현재노드 = this.head
      순회용현재노드 = 순회용현재노드.next

      for (let i = 0; i < index - 1; i++) {
          순회용현재노드 = 순회용현재노드.next
      }

      let 새로운노드 = new Node(data)
      새로운노드.next = 순회용현재노드.next
      순회용현재노드.next = 새로운노드

      this.데이터수 += 1
  }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
console.log(l.fullData())
l.insert(3, 1000)
console.log(l.fullData())