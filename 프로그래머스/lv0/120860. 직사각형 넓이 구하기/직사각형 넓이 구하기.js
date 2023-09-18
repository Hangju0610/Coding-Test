function solution(dots) {
    let answer = []
    for (i = 0; i < 2; i ++) {
        for (j = 1; j < 4; j++) {
            if (dots[0][i] != dots[j][i]){
                answer.push(Math.abs(dots[0][i]- dots[j][i]))
                break
            }
        }
    }
    
    return answer[0]*answer[1];
}