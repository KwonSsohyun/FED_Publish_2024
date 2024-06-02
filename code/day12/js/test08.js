// ▶ 논리 연산자 => true, false 값을 연결하거나 반전시킨다.
//                  논리연산자는 여러개의 조건식을 연결해서 하나의 참,거짓값을 받아야할 때 사용한다.
//                  id == id && password == password => true

//    &&(And) : 조건식1 && 조건식2 ▶ 두 조건식이 모두 true를 반환해야 결과가 true
//				                     연결한 조건식 중 하나라도 false를 반환하면 결과가 false이다.

//    || (Or) : 조건식1 || 조건식2 ▶ 두 조건식 중 하나라도 true를 반환하면 결과가 true
//					                 연결한 조건식이 모두 false를 반환해야 결과가 false이다.

//    ! (Not) : !조건식 ▶ 조건식이 true라면 false로 바꾼다.
//				          조건식이 false라면 true로 바꾼다.
// --------------------------------------------------
// &&(And)
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || false);    // false

console.log("---------------------------------------------------------"); 
// || (Or)
// &&연산자는 조건식 중 하나라도 false를 반환하면 결과가 false이다.
console.log(true && true);      // true
console.log(true && false);     // false

console.log("---------------------------------------------------------"); 
// ! (Not)
console.log(!true);             // false
console.log(!false);            // true
