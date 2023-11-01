function solution(my_string) {
    return my_string.split(/[a-z]/ig).filter((v) => v !== '').reduce((acc,cur) => acc + (+cur),0)
    
}