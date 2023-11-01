function solution(n) {
    let answer = 1
    for (i = 1;i < n; i++){
        answer++
        answer = math3(answer)
    }
    return answer
}

function math3(answer) {
    if (answer % 3 == 0 || String(answer).includes('3')){
        answer ++
        return math3(answer)
    } else {
        return answer
    }
}