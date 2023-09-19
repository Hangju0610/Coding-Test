function solution(array, n) {
    const sortArr = array.sort((a,b) => { return a - b;})
    const MapArr = sortArr.map((v) => {
        return Math.abs(v-n)
    })
    const a = Math.min(...MapArr)
    const b = MapArr.indexOf(a)
    return sortArr[b]
}

// function solution(array, n) {
//     return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
// }