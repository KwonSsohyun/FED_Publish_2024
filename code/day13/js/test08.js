// ▶ 기타 제어문
//    break / continue

// break : 반복문을 강제종료할 때 사용한다.
for(let i=1; i<11; i++){

    if(i==5){ // i값이 5가 되면
        break;  // 반복문을 빠져나가라
    }

    console.log(i);
}

console.log("-----------------------------------");

// continue : 특정 반복구간을 뛰어넘는다.
// 1~10까지 출력하는데 7을 제외하고 출력
for(let i=1; i<11; i++){

    if(i==7){ // i값이 7가 되면
        continue; // 7만 제외하고 다시 for문으로 위로 올라가서 다시 반복
    }

    console.log(i);
}