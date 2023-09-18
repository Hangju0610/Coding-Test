function solution(n) {
    let answer = [];
    let division = 2;
    
    while (n >= 2) {
        if (n % division === 0) {
            answer.push(division)
            n = n / division;
        }
        else division ++ ;
    }
    console.log(answer)
    console.log(new Set(answer))
    return [...new Set(answer)];
}