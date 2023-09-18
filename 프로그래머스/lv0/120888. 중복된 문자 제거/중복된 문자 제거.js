function solution(my_string) {
    let sort = [...new Set(my_string.split(''))].reduce((acc, cur)=> {
        return  acc + cur
    })
    console.log(sort)
    return sort;
}

// 다른 사람 문제 풀이
// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }
