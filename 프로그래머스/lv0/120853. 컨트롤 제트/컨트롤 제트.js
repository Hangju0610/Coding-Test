function solution(s) {
    const a = s.split(' ')
    return a.reduce((acc, cur, curIndex) => {
        if (cur === 'Z') {
            return acc - a[curIndex - 1]
        }
        else {
            return Number(acc) + Number(cur)
        }
    }, 0)
}

// 다른 사람 문제 풀이
// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }
