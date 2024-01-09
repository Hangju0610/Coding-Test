function solution(n) {
    // 동적 계획법을 사용한 풀이
    // index = n, value = F(n)
    const memo = [0,1]
    for (i = 2; i <= n; i++) {
        memo.push((memo[i-2] + memo[i-1])%1234567)
    }
    return memo[n] 
}