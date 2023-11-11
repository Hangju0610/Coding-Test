function solution(nums) {
    let newNums = []
    let choicePets = (nums.length) / 2
    for (let i = 0; i < nums.length; i++) {
        if(newNums.includes(nums[i])) continue;
        newNums.push(nums[i]);
    }
    console.log(newNums)
    if (choicePets <= newNums.length) return choicePets
    return newNums.length
    
//     // key, value 형태로 반환
//     for (let i = 0; i < nums.length; i++) {
//         if (Object.hasOwn(newNums, nums[i])) {
//             newNums[nums[i]]++
//         } else {
//             newNums[`${nums[i]}`] = 1
//         }
//     }
    
    return     
}