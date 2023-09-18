function solution(my_string) {
    let sort = [...new Set(my_string.split(''))].reduce((acc, cur)=> {
        return  acc + cur
    })
    console.log(sort)
    return sort;
}