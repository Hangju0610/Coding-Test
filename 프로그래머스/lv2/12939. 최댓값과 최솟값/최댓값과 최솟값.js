function solution(s) {
    const a = s.split(' ').sort((a,b) => {return a-b})
    return String(a[0] + ' ' + a[a.length-1])
}