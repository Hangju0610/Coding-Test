function solution(s){
    let stack = 0;
    for (let i = 0; i< s.length; i++) {
        if (stack < 0) return false
        if (s[i] == "(") stack++
        if (s[i] == ")") stack--
    }
    if (stack == 0) {
        return true
    } else {
        return false
    }
    // while(stack >= 0 && i < s.length) {
    //     if (s[i] == "(") stack++
    //     if (s[i] == ")") stack--
    //     i++
    // }
    // if (stack == 0) {
    //     return true
    // } else {
    //     return false
    // }
}