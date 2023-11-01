function solution(clothes) {
    // 의상의 종류를 key, 그것에 일치하는 의상의 개수를 hash라고 한다.
    let key = [];
    let hash = [];
    let answer = 1;
    // 반복문을 돌려 hash table을 생성하자.
    for(let i = 0; i < clothes.length; i++) {
        if (key.indexOf(clothes[i][1]) == -1) {
            key.push(clothes[i][1]);
            hash.push(1);
        } else {
            hash[key.indexOf(clothes[i][1])]++;
        }
    }
    for (let value of hash) {
        answer *= (value + 1)
    }
    return answer -1
}