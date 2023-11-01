function solution(s) {
    var answer = [0,0];
    let result = method(answer, s)
    return result
}

function method(array, s) {
    if (s === "1") {
        return array
    } else {
        array[0]++
        let deleteS = s.replaceAll('0','')
        array[1] += s.length - deleteS.length
        let parseS = deleteS.length.toString(2)
        return method(array, parseS) 
    }
}