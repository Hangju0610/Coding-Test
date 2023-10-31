function solution(array) {
    let answer = 0;
    let string = '';
    for (let index of array) {
        string = String(index);
        for (let i = 0; i < string.length; i++) {
            if (string[i] == '7') answer++
        }
    }
    return answer
}