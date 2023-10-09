function solution(my_string, index_list) {
    let answer = '';
    for (const v of index_list) {
        answer += my_string[v]
    }
    return answer
}