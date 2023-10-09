function solution(quiz) {
    let answer = []
    for (const v of quiz) {
        let a = v.split(' ')
        console.log(a)
        if(a[1] == '+') {
            if ( (+a[0]*1) + (+a[2]*1) == (a[4]*1)) {
                
                answer.push("O")
            }
            else { answer.push("X")}
        } else {
            console.log(Number(a[0]) + (a[2]))
            if ( (a[0]*1) - (a[2]*1) == (a[4]*1)) { answer.push("O")}
            else { answer.push("X")}
        }
    }
    return answer
}