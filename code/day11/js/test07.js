/* 
    [🔒문제]
    이름, 나이, 취미 - 각 변수에 저장하고
    
    [📝출력]
    제 이름은 000이고 나이는 00살이고 취미는 000입니다.
*/
// 🔑Code
let userName = "권소현"; // 자바스크립트에서 변수명 name은 권장하지 않는다.
let age = 20;
let hobby = "코딩";

console.log(
    "제 이름은 ",
    userName,
    "이고 나이는 ",
    age,
    "이고 취미는 ",
    hobby,
    "입니다."
);

// ▶ 템플릿 문자열 사용
//    꼭 백틱``으로 문자열 표현
//    ${변수명} 사용
console.log(`제 이름은 ${userName}이고 나이는 ${age}살 이며 취미는 ${hobby}입니다.`);