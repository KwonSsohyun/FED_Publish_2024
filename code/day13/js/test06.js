// ▶ 제어문
//    조건문 - switch문

let number = 2;

switch(number){
    case 1 :
        console.log("number는 1입니다");
        break;  // 기타 제어문 : 해당 switch문 영역을 빠져나가라

    case 2 :
        console.log("number는 2입니다");
        break;

    default :
        console.log("number는 1도 아니고 2도 아닙니다");
        break;
}

console.log("switch문 바깥의 문장");