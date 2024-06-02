// ▶ 형변환(Type Casting)
//    자동 형변환(암묵적 형변환)

// - 자동 형변환이 가능한 경우
//   1. string + 다른 타입 => string
//   2. 다른타입의 값 * 문자열 => number
//   3. boolean + number => number
//   4. boolean * number => number
// --------------------------------------------------

// 1. string + 다른 타입 => string
let str1 = "문자열" + 1;
console.log(str1, typeof str1);     // 문자열1 string

let str2 = "7" + 7;                 // 문자열 + 문자열 → 문자열을 연결한 형태
console.log(str2, typeof str2);     // 77 string

let str3 = true + "";               // 빈문자열을 더해서 string 타입으로 형변환 가능
console.log(str3, typeof str3);     // true string


console.log("---------------------------------------------------------"); 
// 2. 다른타입의 값 * 문자열 => number
let num1 = 2 * "2";
console.log(num1, typeof num1);     // 4 number

let num2 = true * "3";
console.log(num2, typeof num2);     // 3 number

let num3 = false * "3";             // false → 0
console.log(num3, typeof num3);     // 0 number

let num4 = "2" * "2";
console.log(num4, typeof num4);     // 4 number


console.log("---------------------------------------------------------"); 
// 3. boolean + number => number
// 4. boolean * number => number
let bo1 = true + 10;                // 1 + 10
console.log(bo1, typeof bo1);       // 11 number

let bo2 = true * 10;                // 1 * 10
console.log(bo2, typeof bo2);       // 10 number