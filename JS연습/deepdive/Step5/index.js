/*
function solution(n) {
  var answer = '';
  // const arr = ["수","박"];
  if(n%2 == 0){
      // for(let i = 0; i < n; i++){
      //   console.log("수")
      // }
      answer += "박"
  } else {
    // for(let i = 0; i < n; i++){
    //   console.log(arr)
    // }
    answer += "수"
  }
  return answer;
}
solution(6);
*/

function solution(n) {
  var answer = '';
  return "수박".repeat(n).substring(0,n)
}
console.log(solution(4));