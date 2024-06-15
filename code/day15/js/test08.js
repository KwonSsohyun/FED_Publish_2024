// ▶ 배열(Array) - 배열의 요소 추가/삭제

let arr1 = [];
console.log(arr1);      // []


// ● 배열의 요소 추가
arr1[3] = 100;
console.log(arr1.length);   // 4
console.log(arr1);          // [ <3 empty items>, 100 ]


// ● 배열의 요소안의 값 삭제
let arr2 = [10,20,30,40,50];
delete arr2[2];
// 배열의 길이는 변하지 않는다.
console.log(arr2.length);   // 5
console.log(arr2);          // [ 10, 20, <1 empty item>, 40, 50 ]