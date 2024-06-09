// ▶ 익명 함수

let sayHello = function (){
    console.log("반갑습니다");
};

// 변수명();
sayHello();



console.log("----------------------------------------------------------");
// 두개의 문자열을 매개변수로 넘겨받아 연결한 값을 반환하는 익명함수
let chainStr = function(str1, str2){
    return str1+str2;
};

console.log( chainStr("Hello", "World") );

