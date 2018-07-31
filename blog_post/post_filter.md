# 알아두면 쓸모 있는 배열 메서드 04. filter

이번에 알아 볼 메서드는 every() 입니다.
every 메서드는 배열의 모든 요소가 함수로 제공한 테스트에 통과하면 true를 반환하고 그렇지 않으면 false를 반환합니다.

## 기본 문법

`
array.every( 배열의 요소들을 테스트 할 함수 ) ;
`
기본 문법은 위와 같으며 테스트 함수의 인자로는 아래의 3가지를 받을 수 있습니다.

`
callback( currentValue, currentIndex, array )
`

1. currentValue : 현재 순서에 있는 배열 요소
2. currentIndex : 현재 순서에 있는 배열의 순번
3. array : 현재 메서드를 실행한 배열

## 예제 코드

아래 예제 코드를 천천히 살펴보면서 해당 메서드를 이해해보겠습니다.
예제코드는 배열의 요소가 모두 짝수인지를 테스트 하는 코드입니다.

`
let arrNum = [ 2, 4, 6, 7, 10 ] ;
let result = arrNum.every(function( crnt, crntIdx, array ){
	console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;

// 0번째 요소의 테스트 결과 :  true
// 1번째 요소의 테스트 결과 :  true
// 2번째 요소의 테스트 결과 :  true
// 3번째 요소의 테스트 결과 :  false

// 중간에 false가 나오면 메서드는 실행을 중지하고 바로 false를 리턴합니다. 4번째 요소는 실행하지 않습니다.

console.log( 'result : ', result ) ;
// result :  false
`

마무리로 연습 문제 한번 풀어보시길 바랍니다.

## 연습 문제

0 부터 array.length-1 사이의 모든 숫자를 포함하는 경우를 완성형 배열 이라고 해보겠습니다. 아래 배열 arr이 있습니다. 배열 arr이 완성형배열인지 every 메서드를 사용하여 테스트 함수를 만들어보세요.

`
let arr = [ 0, 1, 2, 5, 6 ] ;
function testArr(){
	// 코드 작성
}
`

읽어 주셔서 감사합니다.