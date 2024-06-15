/* 
    [🔒문제]
        프로퍼티를 가진 객체를 각각 3개 생성

        1.
        이름 : 둘리
        나이 : 5
        점수 : 80

        2.
        이름 : 도우너
        나이 :6
        점수 : 50

        3.
        이름 : 또치
        나이 : 5
        점수 : 90

        program 객체를 만들어서
        각 value값으로 위에서 만든 객체들을 각각 저장
        program객체의 프로퍼티는 총3개가 되야하며 value값으로 위에서 만든 객체들을 각각 저장한다.

    [📝출력]
        program객체 출력
*/
// 🔑Code
let per1 = {
    name : "둘리",
    age : 5,
    score : 80
};

let per2 = {
    name : "도우너",
    age : 6,
    score : 50
};

let per3 = {
    name : "또치",
    age : 5,
    score : 90
};


// program 객체를 비어있는 상태로 만든다. (Object 생성자 사용)
let program = new Object;
program.per1 = per1;
program.per2 = per2;
program.per3 = per3;

console.log(program);
/*
    {
        per1: { name: '둘리', age: 5, score: 80 },
        per2: { name: '도우너', age: 6, score: 50 },
        per3: { name: '또치', age: 5, score: 90 }
    }
*/