function solution(A,B){
    const a = A.sort((a,b) => a-b)
    const b = B.sort((a,b) => b-a)
    return a.reduce((acc,cur,index) => acc += cur * b[index],0)
}