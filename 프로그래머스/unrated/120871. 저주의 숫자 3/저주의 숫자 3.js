 function solution(n) {
     console.log([...Array(n*3)].map((_, i) => i + 1))
     
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}