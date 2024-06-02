// ▶ 형변환(Type Casting)
//    강제 형변환(명시적 형변환)

// Number() : 다른 자료형의 데이터를 number타입으로 바꿔준다.
//            string → number
console.log("10", typeof "10");                 // 10 string
console.log(Number("10"), typeof Number("10")); // 10 number

let number1 = Number("   123   ");              // Number() 사용시, 문자열 공백은 없애고 number타입으로 바꿔준다.
console.log(number1, typeof number1);           // 123 number

let number2 = Number("123ㅋㅋㅋ");              // NaN(숫자가 아니다)
console.log(number2, typeof number2);           // NaN number

// boolean → number
let number3 = Number(true);                     // 자바스크립트에서 0이나 0.0이 아닌 숫자는 참이다. (true → 1, false → 0)
console.log(number3, typeof number3);           // 1 number

let number4 = Number(false);                    // 0은 거짓을 나타낸다 (false)
console.log(number4, typeof number4);           // 0 number
