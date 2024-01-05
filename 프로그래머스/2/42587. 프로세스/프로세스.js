function solution(priorities, location) {
    // index가 추가된 배열 만들기. 첫번째는 value, 두번째는 index
    let indexArray = priorities.map((v, idx) => [v, idx])
    const sortedArray = priorities.sort((a,b) => b-a);
    const answerArray = [];
    while(sortedArray.length > 0) {
        let process = indexArray.shift();
        // 현재 존재하는 최우선 순위 값과 큐에서 꺼낸 우선순위 값이 같다면?
        if(process[0] == sortedArray[0]) {
            // 어차피 처리되었으니 우선순위는 알 필요가 없다.
            // 인덱스만 넣어주자.
            answerArray.push(process[1]);
            // 처리된 최우선 순위 값은 제거
            sortedArray.shift();
        }
        indexArray.push(process);
    }
    return answerArray.indexOf(location) + 1;
    
}