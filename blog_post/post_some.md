# 알아두면 쓸모 있는 배열 메서드 02. some

이번에 알아 볼 메서드는 some() 입니다.
some 메서드는 이전 글에서 배운 every 메서드와 비슷합니다.

## 기본 문법

`
array.some( 배열의 요소들을 테스트 할 함수 ) ;
`
기본 문법은 위와 같으며 테스트 함수의 인자로는 아래의 3가지를 받을 수 있습니다.

`
callback( currentValue, currentIndex, array )
`

1. currentValue : 현재 순서에 있는 배열 요소
2. currentIndex : 현재 순서에 있는 배열의 순번
3. array : 현재 메서드를 실행한 배열

## 설명

some 메서드는 테스트 함수에 만족하는 요소를 찾을 때 까지 함수를 실행합니다.
테스트 함수에 만족하는 요소를 찾을 경우 즉시 true 를 반환합니다. 그렇지 않으면 false를 반환합니다.
every 메서드와 다른 점은 배열 요소 중 하나만 테스트에 통과해도 true를 반환한다는 것 입니다.

## 예제 코드

아래 예제 코드를 천천히 살펴보면서 해당 메서드를 이해해보겠습니다.
예제코드는 배열의 요소 중 짝수가 있는 지를 테스트 하는 함수입니다.

`
let arrNum = [ 1, 3, 5, 7, 10 ] ;
let result = arrNum.some(function( crnt, crntIdx, array ){
	console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;

// 0번째 요소의 테스트 결과 :  false
// 1번째 요소의 테스트 결과 :  false
// 2번째 요소의 테스트 결과 :  true

// 중간에 true가 나오면 메서드는 실행을 중지하고 바로 true를 리턴합니다. 3번째 요소는 실행하지 않습니다.

console.log( 'result : ', result ) ;
// result :  true

`

마무리로 연습 문제 한번 풀어보시길 바랍니다.

## 연습 문제

두 배열을 받는 함수가 있습니다.
두 배열에서 하나 이상의 동일한 요소가 포함되어 있는지 테스트하는 함수입니다.
하나 이상 포함한다면 true, 그렇지않다면 false를 반환하는 함수를 작성해보세요.

`
function arrTestFunc(m, n) {
	// return boolean
}

duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]);
// true or false
`

이상입니다.
읽어 주셔서 감사합니다.