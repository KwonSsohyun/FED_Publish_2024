// ▶ 반복문 - while문, do...while문

// ▶ while문
while(true){
    // 무한 반복
    console.log("while문 영역 안의 문장");
    break; // 무한 반복 종료
}

while(false){
    // 조건식을 false이기 때문에 이 영역 안의 코드를 실행하지 않는다.
    console.log("while문 영역 안의 문장");
}


// 조건식에서 사용할 변수 선언
let number = 1; // 초기식

while(number < 11){ // 조건식
    console.log(number); // 실행할 문장

    // 코드를 반복할때마다 number가 1씩 증가된다.
    number++; // 증감식
}



console.log("----------------------------------------------------------");
// ▶ do...while문
let i = 1;
do {
    const text = i + "번 째 반복문";
    console.log(text);
    i++;
}
while (i <= 5);



console.log("----------------------------------------------------------");
// ▶ while문 / do...while문 차이점
// → do..while문
let a = 1;
do {
    const text = a + "번 째 반복문";
    console.log("do..while문 : " + text);
    a++;
}
while (a < 1);

// → while문
let b = 1;
while(b < 1)  {
    const text = b + "번 째 반복문";
    console.log("while문 : " + text);
    b++;
}