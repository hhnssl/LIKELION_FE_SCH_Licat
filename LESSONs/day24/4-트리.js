// step2
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root

        while(순회용현재노드) {
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data
// 5
t.root.left.data
// 3
t.root.right.right.data
// 9
t.root.right.left.data
// 6