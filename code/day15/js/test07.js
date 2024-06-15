// ▶ 배열(Array) - 배열의 요소 접근

// ● 배열 생성
let arr1 = [10, "One", "Two", true, 3.14];
console.log(arr1);      // [ 10, 'One', 'Two', true, 3.14 ]

// ● 배열의 요소 접근
//   → 배열의 인덱스번호로 각 요소에 접근
//     인덱스번호로 하나의 저장공간을 꺼내왔다면 변수 사용하듯이 사용하면 된다.
console.log(arr1[0]);   // 10
console.log(arr1[1]);   // One
console.log(arr1[2]);   // Two
console.log(arr1[3]);   // true
console.log(arr1[4]);   // 3.14

// ● 배열의 요소 수정
arr1[3] = false;
console.log("배열의 3번째 요소 수정 : " + arr1[3]);   // false