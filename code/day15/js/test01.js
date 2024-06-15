// ▶ 객체(Object) - 만들어놓은 객체에 프로퍼티 추가/삭제
/*
    1. 프로퍼티 추가
        객체에 존재하지 않는 키값에 value값을 저장한다.

    2. 프로퍼티 삭제
        프로퍼티에 저장된 value값 삭제
        delete 키워드를 사용한다.
*/


// 객체 생성
let student = {
    // student 객체의 프로퍼티
    studentName : "권소현",
    studentAge : 19,
    mathScore : 100,
    korScore : 90,
    engScore : 80,
    totalScore : function(){
        // 수학,국어,영어 점수 → 합계 출력 기능
        // ▶ this 키워드 : student객체 자기 자신을 의미한다.
        // console.log(this.mathScore + this.korScore + this.engScore);
        return this.mathScore + this.korScore + this.engScore;
    }
}

console.log(student);

// student객체가 가지고 있는 속성 → studentName 속성값 출력
console.log(student.studentName);
console.log(student["studentName"]);

// student객체 totalScore메서드 호출
student.totalScore();


// ------------------------------------------------------------------------------------
// ★ student객체에 새로운 프로퍼티 추가
student.jsScore = 70;   // 객체에 존재하지 않는 프로퍼티 키값에 value값을 저장한다.
console.log(student.jsScore);

// ★ student객체에 새로운 프로퍼티 "메서드" 추가
//    → 객체에 없는 프로퍼티 키값(메서드명)에 익명함수로 기능을 저장한다.
// student객체의 평균 점수를 출력하는 기능 추가
/*
student.sumScore = function(){
    let total = this.mathScore + this.korScore + this.engScore + this.jsScore;
    console.log(total/4);
}
*/
student.sumScore = function(){
    return this.totalScore()/3;
}

console.log("평균값 구하기 : " + student.sumScore());



// ------------------------------------------------------------------------------------
// ★ student객체에 있는 프로퍼티 삭제
//    프로퍼티에 저장된 value값 삭제
//    → 프로퍼티를 꺼내와서 앞에 delete키워드를 붙혀준다.
delete student.studentAge;
console.log(student.studentAge);    // undefined
console.log(student);

delete student.totalScore;  // 뒤에 소괄호 붙히지 않는다. (삭제이기 때문 → 호출 필요없음)
// student.totalScore();       // 오류 발생