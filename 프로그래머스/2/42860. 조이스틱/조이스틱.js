function solution(name) {
    // index가 13보다 높으면 alphabet.length - 인덱스 값 = 아래로 커서한 횟수
    const vertical = changeAlphabet(name)
    const horizontal = moveHorizontal(name)
    return vertical + horizontal;
}

function changeAlphabet(name) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K',"L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result = 0;
    for (let i = 0; i < name.length; i++) {
        if (alphabet.indexOf(name[i]) > 13) {
            result += 26 - alphabet.indexOf(name[i])
        } else {
            result += alphabet.indexOf(name[i])
        }
    }
    return result;
}

function moveHorizontal(name) {
    let move = name.length - 1; // 우로 계속 이동했을때의 값
    
    let index; // 다음 값들이 A인지 확인하기 위해 사용
    for (let i = 0; i < name.length; i++) {
        index = i + 1;
        // 연속되는 A 갯수 확인하기
        while(index < name.length && name[index] == 'A') {
            index++;
        }
        // 순서대로 가는 것과, 뒤로 돌아가는 것 중 이동수가 적은 것을 선택합니다.
        // 처음부터 뒷부분을 먼저 입력하는 것이 더 빠른 경우까지 추가
        move = Math.min(move, (i * 2) + (name.length - index), (name.length - index) * 2 + i);
    }
    return move;
}