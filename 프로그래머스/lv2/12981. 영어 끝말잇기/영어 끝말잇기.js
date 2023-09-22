function solution(n, words) {
    for(i = 1; i<words.length; i++) {
        // 끝말잇기 단어가 다른 경우
        if(words[i-1][words[i-1].length-1] != words[i][0]){
            return [(i%n) + 1, Math.ceil((i+1)/n)]
        }
        // 중복된 단어가 나올 경우
        if(words.indexOf(words[i]) != i){
            return [(i%n) + 1, Math.ceil((i+1)/n)]
        }
    }

    return [0, 0]
}