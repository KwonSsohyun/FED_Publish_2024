// ▶ 증감 연산자
let data1 = 1;
let data2 = 10;

// → 후위형 : 값을 먼저 사용하고 1증가,감소 시킨다.
console.log("증감 연산자(후위형) 값++ | data1++ " + data1++);  // 1
console.log(data1); // 2

console.log("증감 연산자(후위형) 값-- | data2-- " + data2--);  // 10
console.log(data2); // 9


// → 전위형 : 값을 1증가,감소 시키고 값을 사용한다.
console.log("증감 연산자(전위형) ++값 | ++data1 " + ++data1);  // 3
console.log("증감 연산자(전위형) --값 | --data2 " + --data2);  // 8