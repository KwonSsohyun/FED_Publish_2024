// ▶ 관계 연산자
let num1 = 10;
let num2 = 3;

console.log(num1 > num2);   // true
console.log(num1 < num2);   // false
console.log(num1 >= num2);  // true
console.log(num1 <= num2);  // false


// ==, != : 값이 일치하는지 비교
// 타입검사를 하지 않으므로 10과 "10"이 같다고 판단한다.
console.log(10 == "10");    // true 
console.log(10 != 10);      // false
console.log(10 != "10");    // false


// === : 데이터의 타입까지 검사해주므로 10과 "10"이 다르다고 판단한다.
console.log(10 === "10");   // false
console.log(10 !== "100");  // true


console.log("---------------------------------------------------------"); 
let bo1 = 10 == 10;
console.log(bo1);   // true
