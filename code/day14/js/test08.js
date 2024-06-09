// ▶ 객체(Object)

// 학생 객체 생성
let student = {
    // student객체의 프로퍼티(속성)
    // 이름, 나이, 수학점수, 국어점수, 영어점수
    studentName : "권소현",
    studentAge : 18,
    mathScore : 100,
    korScore : 90,
    engScore : 80,

    // student객체의 메서드(기능) - 익명함수 사용
    totalScore : function(){
        // 수학점수, 국어점수, 영어점수 합계를 출력해주는 기능
        // ▶ this : 객체 자기 자신을 의미한다.
        console.log(this.mathScore + this.korScore + this.engScore);
    }
}

// student객체가 가지고 있는 "이름/나이" 출력
// → 객체명.key값;
console.log(student.studentName);
// → 객체명['key값'];
console.log(student['studentName']);

console.log(student.studentAge);


// student객체가 가지고 있는 "totalScore()" 메서드 기능 호출
student.totalScore();

