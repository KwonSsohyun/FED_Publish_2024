// ▶ 배열(Array) - 배열의 메서드
/*
    1. push(값)		: 배열의 마지막 요소에 인자로 넘겨준 값을 추가해주는 메서드
    2. unshift(값)		: 배열의 가장 앞부분에 값을 삽입해주는 메서드
    3. pop() 		: 배열의 가장 마지막 요소를 삭제
    4. shift()		: 배열의 가장 첫번째 요소를 삭제

    5. splice(index, 제거할 요소개수, 배열에 추가될요소)	
        : 배열의 특정위치에 요소를 추가하거나 특정위치의 요소를 삭제하는 메서드

    6. concat(배열)	: 현재 배열과 인자값으로 넘겨받은 배열을 병합하고 나온 복사본의 배열을 반환한다.
    7. indexOf(값)		: 넘겨준 값이 존재하는 인덱스 번호를 반환한다.
    8. reverse()		: 배열요소의 순서를 거꾸로 뒤집어준다.
    9. sort()		: 배열의 요소를 오름차순으로 정렬한다.
*/

let numbers = [10,20,30,40,50];
console.log(numbers);       // [ 10, 20, 30, 40, 50 ]

// push() → 원본 배열값 바뀜
numbers.push(60);
console.log(numbers);       // [ 10, 20, 30, 40, 50, 60 ]

// unshift() → 원본 배열값 바뀜
numbers.unshift(5);
console.log(numbers);       // [ 5, 10, 20, 30, 40, 50, 60 ]

// pop() : 삭제되는 값을 한번 반환하고 삭제된다. → 원본 배열값 바뀜
console.log(numbers.pop()); // 삭제되는 값을 보고 싶다면 콘솔에 넣는다.
// numbers.pop();
console.log(numbers);       // [ 5, 10, 20, 30, 40, 50 ]

// shift() → 원본 배열값 바뀜
numbers.shift();
console.log(numbers);       // [ 10, 20, 30, 40, 50 ]

// splice() → 원본 배열값 바뀜
numbers.splice(1,2);        // 1번 인덱스 요소부터 2개의 요소를 삭제해라
console.log(numbers);       // [ 10, 40, 50 ]

numbers.splice(1,2,400,500,600);    // 1번 인덱스 요소부터 요소를 2개 삭제하고 400,500,600을 값 수정/추가해라
console.log(numbers);               // [ 10, 400, 500, 600 ]


// concat(배열) → 복사본 배열을 반환(원본값은 안바뀜)
let alpa = ["a","b","c"];
console.log(numbers.concat(alpa));  // [ 10, 400, 500, 600, 'a', 'b', 'c' ]

let arr2 = alpa.concat(numbers);
console.log(arr2);                  // [ 'a', 'b', 'c', 10,  400, 500, 600 ]


// indexOf(값) → 결과만 반환
console.log(arr2.indexOf(400));         // 4
console.log(arr2.indexOf(1000));        // -1 (찾고자 하는 값이 배열 안에 없으면 -1을 반환한다.)


// sort() : 오름차순 정렬  → 원본 배열값 바뀜
let arr3 = [70,50,30,90,20,80];
console.log(arr3.sort());               // [ 20, 30, 50, 70, 80, 90 ]


// reverse() : 배열의 요소 순서를 거꾸로 뒤집어준다.  → 원본 배열값 바뀜
console.log(arr3);                      // [ 20, 30, 50, 70, 80, 90 ]
console.log(arr3.reverse());            // [ 90, 80, 70, 50, 30, 20 ] (정렬과 관계없이 요소의 순서만 뒤집어준다.)