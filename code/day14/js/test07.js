// ▶ 화살표 함수

// 1. function 키워드를 생략하고 화살표 => 작성한다.
let addNum1 = (num1, num2) => {
    console.log("addNum1 : " + (num1+num2));
};
addNum1(100,200);

// 2. 실행할 문장이 한문장이라면 중괄호 생략가능
let addNum2 = (num1, num2) => console.log("addNum2 : " + (num1+num2));
addNum2(100,200);

// 3. 실행할 문장에 return이 있다면 중괄호 생략불가
let addNum3 = (num1, num2) => {return num1+num2};
console.log("addNum3 : " + addNum3(100,200) );

// 3-1. ★ return과 중괄호를 함께 생략할수 있다. → return을 생략해도 알아서 수행한다.
let addNum4 = (num1, num2) => num1+num2;
console.log("addNum4 : " + addNum4(100,200) );


// ▶ 익명 함수
// 두개의 정수를 받아와 더한 값을 출력하는 익명함수
let addNum = function (num1, num2){
    console.log("익명함수 : " + (num1+num2));
};
addNum(10,20);