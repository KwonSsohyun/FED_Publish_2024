// ▶ 함수(Function)
//    디폴트 매개변수(Default Parameter)

// 두 개의 문자열을 전달받아 각각 출력하는 기능
function greet(str1, str2){
    console.log(str1);
    console.log(str2);
}

// 함수 호출
greet("hello", "JavaScript");
greet("hi");    // str2는 undefined로 나온다.



console.log("----------------------------------------------------------");
// function introduce(id, password, userName = "사용자"){
//     console.log(id, password, userName);
// }

function introduce(id = "thgus", password = "1234", userName = "권소현"){
    console.log(id, password, userName);
}

introduce("thgus", "1234", "권소현");
introduce("thgus", "1234"); // 값을 넘겨주지 않아도 자동으로 default값으로 설정된다. → thgus 1234 권소현

introduce(); // 값을 넘겨주지 않아도 모두 default값 설정 했기 때문에 잘 나온다. → thgus 1234 권소현