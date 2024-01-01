// function solution(n, lost, reserve) {
//     for (let i = 0; i < lost.length; i++) {
//         // 먼저 여벌 체육복을 가져온 학생이 도난당했다면?
//         if (reserve.indexOf(lost[i]) != -1) {
//             reserve.splice(reserve.indexOf(lost[i]), 1);
//             continue;
//         }
//         if (reserve.indexOf(lost[i]-1) != -1) {
//             reserve.splice(reserve.indexOf(lost[i]-1), 1);
//             continue;
//         }
//         if (reserve.indexOf(lost[i] + 1) != -1){
//             reserve.splice(reserve.indexOf(lost[i] + 1), 1);
//             continue;
//         }
//         n--
//         continue;
//     }
//     console.log(reserve)
//     return n;
// }
function solution(n, lost, reserve) {
    let answer = 0;
    lost = lost.sort((a, b) => a - b);    
    reserve = reserve.sort((a, b) => a - b);

    for(let i = 1; i <= n; i++) {
        //만약 i가 lost 배열에 없다면(즉, 옷이 있다면)
        if (lost.indexOf(i) < 0) {
            answer++;
        }
        //만약 i가 lost 배열에 있다면(즉, 옷이 없다면)
        else {
            //만약 직전사람이 여분 옷이 있다면
            if (reserve.indexOf(i - 1) >= 0 && lost.indexOf(i-1) < 0) {
                answer++;
                //여분 옷 썼으니까 reserve 배열에서 제거
                reserve = reserve.filter((element) => element !== (i-1));
            } 
            //직전 사람은 옷이 없다는데 혹시 다음사람이 여분옷이 있다면? (단, 여분옷있는 사람이 lost 배열에 있으면 안됨)
            else if (reserve.indexOf(i + 1) >= 0 && lost.indexOf(i+1) < 0) {
                answer++;
                //여분 옷 썼으니까 reserve 배열에서 제거
                reserve = reserve.filter((element) => element !== (i+1));
            }
            //만약 자기가 도난도 당하고 여분 옷도 있다면? (즉, lost와 reserve 배열에 모두 포함)
            else if (reserve.indexOf(i) >= 0) {
                answer++;
                //여분 옷 썼으니까 reserve 배열에서 제거
                reserve = reserve.filter((element) => element !== (i));
            }
            else {
                continue;
            }
        }
    }
    return answer;
}