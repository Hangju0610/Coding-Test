function solution(d, budget) {
    // 1. sort로 예산을 작은 수로 정렬한다.
    d.sort((a,b) => a-b)
    // 2. total 예산을 선언
    let total = 0;
    // 3. 반복문을 진행하면서 total 예산을 더해준다
    for (let i = 0; i <d.length; i++) {
        total += d[i]
        // console.log(total)
        // 3-1. 예산이 딱 맞는 경우
        if (total == budget) {
            return i + 1
        }
        // 3-1 total 값이 예산보다 큰 경우
        if (total > budget) {
            return i
        }
    }
    // 4. 반복문을 다 하고도 예산이 남은 경우
    return d.length
}