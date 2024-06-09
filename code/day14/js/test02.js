// ▶ 함수(Function)

// "Hello World" 를 출력하는 기능
// ▶ 함수 정의
function welcome(){
    console.log("Hello World");
}

// ▶ 만들어놓은 함수 호출(사용)
//    → 함수명();
welcome();



console.log("----------------------------------------------------------");
// [예제] 외부에서 전달받은 정수에 
//        10을 더하고 결과를 
//        호출한 쪽에 돌려주는 기능
function add10(number){
    let result = number + 10;
    return result;
}
// add10(100);  →  함수를 호출한 코드 하나의 값이 되었다. 110
// console.log(add10(100));

let result = add10(200);
console.log(result);



console.log("----------------------------------------------------------");
// [예제] 외부로부터 두개의 정수를 넘겨받아 
//        두 정수를 더하고
//        결과를 반환하는 기능
function add(num1, num2){
    return num1+num2;   // 매개변수로 넘겨받은 두 개의 정수값을 더하고 반환하겠다.
}

// add(10,20);
console.log( add(10,20) );