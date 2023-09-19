// function solution(progresses, speeds) {
//     let result = []
//     while(progresses.length != 0){
//         // 하루 진행속도 추가
//          for (i = 0; i < progresses.length; i++) {
//              progresses[i] = progresses[i] + speeds[i]
//          }
//         let count = 0
//         while(progresses[0] >= 100) {
//             console.log(progresses[0])
//             progresses.shift()
//             speeds.shift()
//             count++
//         }
//         if (count > 0) result.push(count)
//     }
//     return result
// }

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}