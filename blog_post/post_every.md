# 알아두면 쓸모 있는 배열 메서드 02. every

이번에 알아 볼 메서드는 every() 입니다.
every 메서드는 배열의 모든 요소가 함수로 제공한 테스트에 통과하면 true를 반환하고 그렇지 않으면 false를 반환합니다. 다시한번 말하지만 모든 요소가 통과해야합니다.

## 기본 문법

`
array.every( 배열 요소를 테스트할 함수 ) ;
`
기본 문법은 위와 같습니다.
여기서 callback 함수의 인자로는 아래의 3가지를 받을 수 있습니다.

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





다른 메서드들과는 조금 다른 구조라서 조금 복잡해 보일 수도 있습니다. 하지만 이해하게 되면 많은 작업들에 사용할 수 있는 유용한 메서드입니다.

마무리로 아래 문제 한번 풀어보시길 바랍니다.

## 연습 문제

배열 arrName에는 영어 이름으로 구성된 요소들이 있습니다.
이 배열에서 중복된 이름은 하나만 남겨 놓고 나머지 중복 요소는 삭제하는 작업입니다.
연습 삼아 한번 풀어보시길 바랍니다.

`
let arrName = ['bob', 'mike', 'john', 'bob', 'jane', 'mike' ] ;
// result : [ 'bob', 'mike', 'john', 'jane' ] ;
`

읽어 주셔서 감사합니다.