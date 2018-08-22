# 알아두면 쓸모 있는 배열 메서드 04. map

이번에 알아볼 메서드는 map()입니다.
map은 반복 관련 메서드입니다. 배열의 모든 요소를 돌며 요소를 사용하여 새로운 배열을 만들 때 사용합니다.

## 기본 문법

`
array.map( function callback( currentValue, currentIndex, array ){
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

map은 배열의 모든 요소에 callback 함수를 실행시켜 새로운 값을 반환합니다.
반환된 값들을 최종적으로 하나의 배열로 만들어 반환해줍니다.
기존의 배열은 변경되지 않고 유지됩니다.

## 예제 코드

아래 예제 코드를 천천히 살펴보면서 해당 메서드를 이해해보겠습니다.
예제 코드는 각 요소에 자기의 인덱스 번호를 붙여서 새로운 배열을 만드는 코드입니다.
인덱스 번호는 1부터 시작합니다.

`
let names = [ 'jjackkun', 'nena', 'ridersong', 'keunho' ] ;
let newArray = names.map(function( crnt, crntIdx, array ){
	return (crntIdx+1) + '. ' + crnt ;
}) ;

console.log( newArray ) ;
// ["1. jjackkun", "2. nena", "3. ridersong", "4. keunho"] 'result : ', result ) ;

console.log( names ) ;
// ["jjackkun", "nena", "ridersong", "keunho"]
// 기존 배열은 변경되지 않는 것을 볼 수 있습니다.
`

마무리로 연습 문제 한번 풀어보시길 바랍니다.

## 연습 문제

연습 문제입니다.
문제는 arrPerson 배열 내부의 객체를 재구성하는 것입니다.
아래의 결과값처럼 나오도록 하는 함수를 만들어보세요.

`
var arrPerson = [ {name:'John', age:30}, {name:'Mike', age:20}, {name:'Bob', age: 23} ];
let result = arrPerson.map(function(crnt, crntIdx, array){
	// return  ;
}) ;
console.log( result ) ;
// [ {John: 30}, {Mike: 20}, {Bob: 23} ]
`

공부를 해보고 직접 사용해보는 것이 무엇보다 중요합니다.
이제 막 공부를 시작하신 분들은 꼭 문제를 풀어서 한번 사용해보시길 바랍니다!

이상입니다.
읽어 주셔서 감사합니다.