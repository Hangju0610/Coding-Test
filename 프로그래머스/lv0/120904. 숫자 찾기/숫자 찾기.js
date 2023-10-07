function solution(num, k) {
    let num2 = String(num);
    let answer = num2.indexOf(k)
    return answer == -1 ? -1 : answer+1
}