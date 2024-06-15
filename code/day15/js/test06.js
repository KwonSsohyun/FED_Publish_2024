// ▶ 배열(Array) - 배열 생성(배열 리터럴 / Array 생성자)

// 배열 생성
// 1. 배열 리터럴
//    let 배열명 = [];
let arr1 = ["One", "Two", "Three", "Four", "Five"];
console.log(arr1);  // [ 'One', 'Two', 'Three', 'Four', 'Five' ]



// 2. Array 생성자 사용
let arr2 = new Array();     // 비어있는 배열의 형태로 만들어진다.
console.log(arr2);          // []

let arr3 =  new Array(5);   // 값이 채워지지 않은 5칸의 배열을 만들겠다.
console.log(arr3);          // [ <5 empty items> ]  : 5개의 비어있는 저장공간



// 배열의 길이(배열의 요소개수) : 배열명.length; ▶ 배열객체가 가지고 있는 속성사용
console.log(arr3.length);   // 5