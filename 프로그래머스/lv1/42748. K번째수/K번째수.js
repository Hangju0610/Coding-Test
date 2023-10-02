function solution(array, commands) {
    var answer = [];
    for (let i of commands) {
        let splitArray = array.slice(i[0]-1, i[1]).sort((a,b) => a-b)
        console.log(splitArray)
        answer.push(splitArray[i[2]-1])
    }
    return answer;
}