function solution(s) {
    const a = s.split(' ')
    return a.reduce((acc, cur, curIndex) => {
        if (cur === 'Z') {
            return acc - a[curIndex - 1]
        }
        else {
            return Number(acc) + Number(cur)
        }
    }, 0)
}
