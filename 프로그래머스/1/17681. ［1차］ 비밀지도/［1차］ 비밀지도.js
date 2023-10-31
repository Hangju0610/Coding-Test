function solution(n, arr1, arr2) {
    let result = []
    for (let i = 0; i < n; i++) {
        let wall = arr1[i]|arr2[i]
        let twoString = wall.toString(2)
        while(twoString.length != n) {
            twoString = '0'+ twoString
        }
        result.push(twoString.replaceAll('1','#').replaceAll('0',' '))
    }
    return result
}