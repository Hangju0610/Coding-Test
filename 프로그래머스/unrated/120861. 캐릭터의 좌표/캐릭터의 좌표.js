function solution(keyinput, board) {
    let answer = [0,0];
    let limit = [(board[0]-1)/2, (board[1]-1)/2]
    for (let i = 0; i < keyinput.length; i++) {
        switch(keyinput[i]){
            case "left":
                if (answer[0] > -limit[0]) answer[0]--;
                break;
            case "right":
                if (answer[0] < limit[0]) answer[0]++;
                break;
            case "up":
                if (answer[1] < limit[1]) answer[1]++;
                break;
            case "down":
                if (answer[1] > -limit[1]) answer[1]--;
                break;
        }
    }
    return answer;
}