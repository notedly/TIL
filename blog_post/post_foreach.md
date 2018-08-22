# 알아두면 쓸모 있는 배열 메서드 05. forEach

알아두면 쓸모 있는 배열 메서드 시리즈 마지막 메서드입니다!

이번에 알아볼 메서드는 forEach()입니다.
forEach 메서드도 map 과같이 반복 관련 메서드입니다.
배열 요소를 돌며 배열 요소마다 전달한 함수를 실행합니다.
for 반복문처럼 배열 모든 요소를 반복해서 무엇인가를 처리하고 싶을 때 사용하면 좋은 메서드입니다.

## 기본 문법

`
array.forEach( function callback( currentValue, currentIndex, array ){
	// return 새로운 배열 ;
}) ;
`
기본 문법은 위와 같으며 테스트 함수의 인자로는 아래의 3가지를 받을 수 있습니다.

`
callback( currentValue, currentIndex, array )
`

1. currentValue : 현재 순서에 있는 배열 요소
2. currentIndex : 현재 순서에 있는 배열의 순번
3. array : 현재 메서드를 실행한 배열

## 설명

forEach 메서드는 배열의 전체 요소를 돌며 배열 각 요소마다 제공한 함수를 실행합니다.
이 메서드는 map() 메서드와는 달리 실행이 완료된 후 undefined를 반환합니다.

## 예제 코드

아래 예제 코드를 천천히 살펴보면서 해당 메서드를 이해해보겠습니다.
아래 코드는 arr 배열을 복사하는 코드입니다.

`
let arr = [ '가', '나', '다', '라', '마' ] ;
let copyArr = [] ;

arr.forEach(function(crnt, crntIdx, array){
	copyArr.push( crnt ) ;
}) ;

console.log( 'copyArr : ', copyArr ) ;
// copyArr : ["가", "나", "다", "라", "마"]

console.log( 'arr : ', arr ) ;
// arr : ["가", "나", "다", "라", "마"]
// 기존 배열은 변경되지 않는다.
`

마무리로 간단한 연습 문제 한번 풀어보시길 바랍니다.

## 연습 문제

배열 요소 중 짝수인 요소만 곱하기 2 만큼 증가시키는 함수입니다.
콘솔에 찍힌 결과처럼 나오는 코드를 작성해보세요!

`
let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ;

console.log( num ) ;
// [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]
`

이번 시리즈를 통해서 최근 알게 되고 유용하게 사용한 메서드를 알아보았습니다.
배열의 다양한 메서드를 알고 있으면 개발하는데 많이 도움이 될 것이라 생각합니다.

이상입니다.
읽어 주셔서 감사합니다.