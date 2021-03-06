# 알아두면 쓸모 있는 배열 메서드 03. filter

이번에 알아 볼 메서드는 filter() 입니다.

## 기본 문법

`
array.filter( 배열의 요소들을 테스트 할 함수 ) ;
`
기본 문법은 위와 같으며 테스트 함수의 인자로는 아래의 3가지를 받을 수 있습니다.

`
callback( currentValue, currentIndex, array )
`

1. currentValue : 현재 순서에 있는 배열 요소
2. currentIndex : 현재 순서에 있는 배열의 순번
3. array : 현재 메서드를 실행한 배열

## 설명

filter 메서드는 단어의 의미만 봐도 무슨 역할을 하는지 예상할 수 있습니다.
이 메서드는 테스트 함수에 만족하는 배열 요소만을 추출해서 새로운 배열을 반환해줍니다.

테스트 함수에 통과하지 못한 배열 요소는 건너 띄며 다음 요소에 테스트 함수를 실행합니다.

최종적으로 새로운 배열을 반환하며 기존에 있던 배열은 변화시키지 않고 그대로 보존합니다.

## 예제 코드

아래 예제 코드를 천천히 살펴보면서 해당 메서드를 이해해보겠습니다.
예제코드는 배열의 요소 중 짝수인 요소만을 추출하는 코드입니다.

`
let arr = [ 1, 2, 3, 4, 5 ] ;
let result = arr.filter(function( crnt, crntIdx, array ){
	console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;


// 0번째 요소의 테스트 결과 :  false
// 1번째 요소의 테스트 결과 :  true
// 2번째 요소의 테스트 결과 :  false
// 3번째 요소의 테스트 결과 :  true
// 4번째 요소의 테스트 결과 :  false

console.log( 'result : ', result ) ;
// result :  [2, 4]
`

이번 시간에도 마무리로 연습 문제 한번 풀어보시길 바랍니다.

## 연습 문제

objs로 전달한 배열에서 name과 같은 이름의 속성이 있는 객체들만 추출해서 새로운 배열로 반환해보세요.
`
function pluck(objs, name) {
	// return
}

pluck( [{a:1}, {b:4}, {a:7}, {b:12}, {b:32}], 'b' ) ;

// 결과 : [ {b: 4}, {b: 12}, {b: 32} ]
`

이상입니다.
읽어 주셔서 감사합니다.