function solution(my_string) {
    let copy = my_string
    let answer = ''
    for (i=0;i <my_string.length; i++) {
        if (my_string[i] === copy[i].toUpperCase()) {
            answer += my_string[i].toLowerCase()
        } else {
            answer += my_string[i].toUpperCase()
        }
    }
    return answer
}