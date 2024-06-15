/* 
    [🔒문제]
        pay()   : 매개변수로 상품명, 상품가격, 재고량, 콜백함수 전달받는다.
        기능    : 상품가격에 재고량을 곱한 총가격과 상품명을 callback함수를 호출하여 인자값으로 전달한다.
                    매개변수로 상품명, 총가격을 받아와서 콘솔창에 출력하는 함수

    [📝출력]
        pay() 함수 호출
*/
// 🔑Code
// 1) pay 함수 선언
function pay (prodName, prodPrice, prodStock, callback){
    callback(prodPrice * prodStock, prodName);
}
// 2) pay 함수 호출
pay("빼빼로", 1500, 3, function(totalPrice, prodName){
    console.log(`상품명 : ${prodName}\n총 가격 : ${totalPrice}`);
});