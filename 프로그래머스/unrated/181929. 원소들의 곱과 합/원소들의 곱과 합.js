function solution(num_list) {
    let a = num_list.reduce((acc, cur) => acc = acc * cur, 1)
    let b = num_list.reduce((acc, cur) => acc += cur, 0)
    console.log(a,b*b)
    return a < b*b ? 1 : 0
}