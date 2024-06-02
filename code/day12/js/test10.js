let userName = "권소현";
let userAge = 20;

// 유저의 나이가 19살 이상이면 "입장가능" 출력
//              19살 미만이면 "입장불가" 출력

// console.log(userAge >= 19 ? "입장가능" : "입장불가");   // 입장가능

let result = userAge >= 19 ? "입장가능" : "입장불가";
console.log(`${userName}님은 ${userAge}살이고 ${result}입니다.`);