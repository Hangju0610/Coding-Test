function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1
    else if (arr1.length < arr2.length) return -1
    else {
        let answer = arr1.reduce((acc, cur, index) => acc += cur - arr2[index], 0)
        return answer > 0 ? 1 : answer == 0 ? 0 : -1
    }
}