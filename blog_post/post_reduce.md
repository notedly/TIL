# 알아두면 쓸모 있는 배열 메서드 01. reduce

배열은 유용한 메서드들을 많이 가지고 있습니다.
저처럼 초급 개발자들은 배열의 메서드를 잘 활용하지 못하고 있습니다.
알아두면 쓸모 있고 편리한 배열 메서드들이 많기 때문에 하나씩 정리해보고자 합니다. 초급자의 눈높이에 맞게 최대한 쉽게 설명하기 위해 노력해보겠습니다.

첫 번째로 알아보고자 하는 메서드는 reduce입니다.

reduce 메서드는 배열의 요소들을 순차적으로 돌며, 이전 콜백 함수의 return 값을 previousValue로 전달받아 콜백 함수 내부의 코드를 실행하며 최종적으로 하나의 값으로 return 해줍니다.

직접 코드를 보면서 알아보겠습니다.

## 기본 문법

`
array.reduce( callback함수, 초기값 ) ;
`
기본 문법은 위와 같습니다. 여기서 callback 함수의 인자로는 아래의 4가지를 받을 수 있습니다. 초기값은 처음 콜백 함수를 실행할 때 첫 번째 인자로 전달할 값이며 생략이 가능합니다.
초기값을 생략할 경우 첫 번째 값은 배열 요소의 첫 번째 값이됩니다.

`
callback( previousValue, currentValue, currentIndex, array )
`

1. previousValue : 이전 콜백의 return 값
2. currentValue : 현재 순서에 있는 배열 요소
3. currentIndex : 현재 순서에 있는 배열의 순번
초기값이 정해져있으면 순번은 0부터 시작하며, 초기값이 정해져있지 않다면 순번은 1부터 시작합니다.
4. array : 현재 메서드를 실행한 배열

## 예제 코드

아래 예제 코드를 천천히 살펴보면 이 메서드의 실행 과정을 쉽게 이해할 수 있습니다.
기본적인 예제로 가장 많이 나오는 배열 요소의 총합을 구하는 코드를 작성해 보겠습니다.

`
let arrNum = [ 1, 2, 3, 4, 5 ] ;
let sum = arrNum.reduce(function( prev, crnt, crntIdx, array ){
	return prev + crnt ;
}, 0) ;
console.log( 'sum : ', sum ) ;
`

처음 콜백 함수의 리턴 값인 prev 값은 설정한 초기값인 0이 들어갑니다.
위 코드가 실행되는 과정을 보면 아래와 같습니다.

arrNum[0] : 1 => prev : 0 / crnt : 1 / 반환값 : prev + crnt = 1
arrNum[1] : 2 => prev : 1 / crnt : 2 / 반환값 : prev + crnt = 3
arrNum[2] : 3 => prev : 3 / crnt : 3 / 반환값 : prev + crnt = 6
arrNum[3] : 4 => prev : 6 / crnt : 4 / 반환값 : prev + crnt = 10
arrNum[4] : 5 => prev : 10 / crnt : 5 / 반환값 : prev + crnt = 15

`
// sum : 15
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