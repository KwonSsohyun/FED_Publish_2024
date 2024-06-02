// ▶ 형변환(Type Casting)
//    강제 형변환(명시적 형변환)

// Boolean() : 소괄호 안에 넘겨준 데이터를 논리형 데이터로 변환해준다.
console.log(0, typeof 0);                       // 0 number
console.log(Boolean(0), typeof Boolean(0));     // false boolean
console.log(Boolean(0.0), typeof Boolean(0.0)); // false boolean
console.log(Boolean(10), typeof Boolean(10));   // true boolean

// "" '' → 값이 없는 문자열이다
console.log(Boolean(""));                       // false
console.log(Boolean(''));                       // false
console.log(Boolean("안녕"));                   // true


console.log("---------------------------------------------------------"); 
// String() : 소괄호 안에 넘겨준 데이터를 문자열 데이터로 변환해준다.
let str1 = String(123);
console.log(str1, typeof str1);                 // 123 string

let str2 = String(true);
console.log(str2, typeof str2);                 // true string