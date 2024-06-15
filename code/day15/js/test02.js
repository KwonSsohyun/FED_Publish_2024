// ▶ 객체(Object) - 만들어놓은 객체에 프로퍼티 value값 수정

// 객체 생성
let programming = {
    pro1 : "html",
    pro2 : "css",
    pro3 : "JavaScript"
};

console.log(programming);

// ★ 프로퍼티 value값 수정
//    → 기존에 존재하는 키값에 새로운 value값을 저장한다.
programming.pro1 = "Java";
console.log(programming);


// ★ 객체에 존재하지 않는 키에 value값을 저장하면 프로퍼티 추가
programming.pro4 = "Python";
console.log(programming);


// ★ for ~ in문 : 객체가 가진 프로퍼티의 키값을 차례대로 카운터변수에 저장해주는 반복문
// programming 객체의 value값을 하나씩 출력
for(let i in programming){
    // ▶ 키값 출력
    //    → i 변수는 반복적으로 programming객체의 키값을 받아온다.
    // console.log(i);     // pro1, pro2, pro3, pro4 출력됨


    // ▶ 벨류값 출력 
    //    → i 카운터 변수에 저장된 키값을 이용해 순차적으로 value값에 접근할 수 있다.
    console.log(programming[i]);    // Java, css, JavaScript, Python

}


// ------------------------------------------------------------------------------------
// ▶ 객체(Object) - Object() 생성자를 사용한 객체생성
// 예제) 객체의 value값으로 객체를 저장
// 1) user객체 생성
let user = {
    userName : "권소현",
    userAge : 20,
    userAddress : "서울시",
    introduce : function(){
        console.log(`안녕하세요 제 이름은 ${this.userName}이고 나이는 ${this.userAge}살 입니다.`);
    }
}

// 2) site객체 생성
//    site객체에 속성값으로 user객체를 대입한다.
// → Object() 생성자 사용
//   let 객체명 = new Object();  ▶ 비어있는 객체를 만들겠다.
let site = new Object();    // Object생성자로 비어있는 site객체를 만든다.

site.user1 = user;          // user1이라는 키값에 value값으로 user객체를 저장한다.
console.log(site);

// site객체가 가지고 있는 user객체의 userName을 출력
console.log(site.user1.userName);

site.user1.introduce();