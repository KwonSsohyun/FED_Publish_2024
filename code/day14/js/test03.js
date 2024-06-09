// ▶ 함수(Function)
//    매개변수로 전달받을 이름을 반환하는 함수

function getName(userName){
    return userName;
}

let userName = getName("권소현");   // → 인수／인자값 : 함수를 호출하는 쪽에서 매개변수 측에 전달하는 데이터
console.log(userName);



console.log("----------------------------------------------------------");
function addTen(number){
    return number+10;
}

function add(num1, num2){
    return num1+num2;
}

// 함수의 반환값끼리 연산도 가능하다.
console.log( addTen(10) + add(1,2) ); // 23