// ▶ + 연산자
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);   // 30
console.log(num1 + 2.5);    // 12.5

// 문자 + 문자 = 문자연결
console.log("안녕" + "하세요"); // 안녕하세요
console.log("1" + "2");         // 12
console.log("hello" + 10);      // hello10


console.log("---------------------------------------------------------"); 
// ▶ - 연산자
console.log(num2 - num1);       // 10
console.log(num2 - 1.5);        // 18.5


console.log("---------------------------------------------------------"); 
// ▶ * 연산자
console.log(num1 * 2);          // 20
console.log(2.5 * 2);           // 5


console.log("---------------------------------------------------------"); 
// ▶ / 연산자 → 나누고 난 몫을 반환한다.
console.log(num2 / num1);       // 2
console.log(num2 / 0);          // Infinity(무한)이라는 값으로 반환된다.


console.log("---------------------------------------------------------"); 
// ▶ % 연산자 → 나누고 난 나머지를 반환한다.
console.log(10%3);              // 1 (몫 3 / 나머지 1)


console.log(300%1000);
console.log(300/1000*10);