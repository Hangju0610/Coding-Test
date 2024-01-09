function solution(triangle) {
    // Bottom-up으로 구현
    for (let i = triangle.length - 1; i > 0; i--) {
        triangle[i-1].map((value, index) => {
             triangle[i-1][index] = triangle[i][index] >= triangle[i][index + 1] ? (value + triangle[i][index]) : (value+ triangle[i][index + 1]);
        })
    }
    return triangle[0][0]
}