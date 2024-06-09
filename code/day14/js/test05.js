/* 
    [🔒문제]
    매개변수로 이름과 정수를 넘겨받아 정수만큼 이름을 출력하는 함수
    
    [📝출력]
    "홍길동", 5  ▶  홍길동 5번 출력
*/
// 🔑Code
function test1(name, num){

    for(let i=0; i < num; i++){
        console.log(name);
    }

}

test1("권소현", 5);



console.log("----------------------------------------------------------");
/* 
    [🔒문제]
    두개의 정수를 매개변수로 넘겨받아 둘 중 작은 수를 출력하는 함수
    
    [📝출력]
    둘 중 작은 수 출력
*/
// 🔑Code
function test2(num1, num2){

    let result = num1 < num2 ? num1 : num2;
    console.log(result);

}

test2(1, 5);



console.log("----------------------------------------------------------");
/* 
    [🔒문제]
    매개변수로 정수 한개를 넘겨받아 1 ~ 넘겨받은 정수까지의 합을 "반환"하는 함수
    
    [📝출력]
    1 ~ 입력받은 정수의 합
*/
// 🔑Code
function test3(num){
    let total = 0;

    for(let i=1; i<=num; i++){
        total += i;      // total = total + i
    }

    return total;
}

console.log("1부터 작성한 숫자의 합 : " + test3(10));



console.log("----------------------------------------------------------");
/* 
    [🔒문제]
    정수 2개를 넘겨받아 
    첫번째 정수와 두번째 정수 사이에 
    7의 배수가 몇개있는지 개수를 "반환"하는 함수
    
    [📝출력]
    7의 배수 몇개
*/
// 🔑Code
function test4(num1, num2){
    let count = 0;          // 7의 배수의 갯수를 담을 변수

    for(num1; num1 <= num2; num1++){
        if(num1 % 7 == 0){  // 7의 배수일때만
            count++;        // 카운트변수 1증가
        }
    }

    return count;
}

console.log("7의 배수 갯수 찾기 : " + test4(1,63));