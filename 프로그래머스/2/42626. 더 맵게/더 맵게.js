class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 부모 인덱스, 자식 인덱스 구하는 메소드
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  swap(idx_1, idx_2) {
    [this.heap[idx_1], this.heap[idx_2]] = [this.heap[idx_2], this.heap[idx_1]];
    return this.heap;
  }
  size() {
    return this.heap.length;
  }
  // 최소 값 추출 메서드
  pop() {
    // 배열에 아무것도 없다면 null을 return 진행
    if (this.heap.length === 0) return null;
    // 최소값 확인
    const root = this.heap[0];
    // 마지막 값 추출
    const lastNode = this.heap.pop();
    // pop 진행 후 배열 길이가 1 이상이라면
    if (this.heap.length !== 0) {
      // 마지막 노드를 최상단 노드로 이동
      this.heap[0] = lastNode;
      // Down 정렬 진행
      this.bubbleDown();
    }
    // root 값 반환 진행
    return root;
  }
  // 값 넣는 인덱스
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  //Down 정렬 진행
  bubbleDown() {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    const lastIndex = this.size();
    while (
      (leftChildIndex < lastIndex &&
        this.heap[leftChildIndex] < this.heap[index]) ||
      (rightChildIndex < lastIndex &&
        this.heap[rightChildIndex] < this.heap[index])
    ) {
      if (
        this.heap[rightChildIndex] < this.heap[leftChildIndex] &&
        rightChildIndex < lastIndex
      ) {
        this.swap(rightChildIndex, index);
        index = rightChildIndex;
      } else {
        this.swap(leftChildIndex, index);
        index = leftChildIndex;
      }
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }
  }
  // up 정렬 진행
  bubbleUp() {
    let childIndex = this.size() - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.heap[childIndex] < this.heap[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }
}

function solution(scoville, K) {
    let answer = 0;

    //우선순위큐(heap) 생성
    const heap = new MinHeap();

    //scoville에 있는 각각의 요소를 forEach를 이용하여 sorting 한다.
    scoville.forEach(value => heap.push(value));

    while(heap.heap[0] < K && heap.size() > 1) {
        //첫번째 pop의 값과 두번째 pop의 2배의 합을 newfood 변수에 저장
        const first_pop = heap.pop();
        const second_pop = heap.pop();
        const newfood = first_pop + (second_pop * 2);

        //newfood를 다시 heap 트리에 삽입
        heap.push(newfood);
        //1번 루프를 돌 때마다 answer에 1 추가
        answer++;
    }

    if(heap.heap[0] >= K) {
        return answer;
    } else {
        return -1;
    }
}