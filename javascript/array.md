
배열에 대해 정리 합니다.
이해가 잘 안되는 부분은 예제를 함께 작성하도록 합니다.

# Array

배열, 여러 개의 데이터를 저장할 수 있는 객체

## every

배열의 모든 요소가 특정 조건을 만족하는지 알고 싶을 때 사용하는 메서드이다.

```
array.every(callback[, thisArg])
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : every가 호출한 배열
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 예제

```
let arrNum = [ 1, 2, 3, 4, 5 ] ;

function test(currentValue, index, array){
	return currentValue > 0 ;
}

let result = arrNum.every( test ) ;
console.log( result ) ;		// true
```

test 함수의 첫번째 인자는 현재 배열 요소의 값이고, 두번째 인자는 현재 배열요소의 index이고 0부터 시작한다.
세번째 인자는 현재 돌고 있는 배열 자체를 가리킨다.

메서드 수행중 콜백 함수에서 한번이라도 false라는 결과가 나오면 바로 함수를 중단하고 false를 리턴한다.
전체 요소를 다 돌때 까지 false를 리턴하지 않으면 true를 리턴한다.

## filter

인자로 전달한 함수에 만족하는 요소만 추출해서 새로운 배열로 만들고 싶을 때 사용하는 메서드이다.

```
array.filter(callback[, thisArg])
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : 해당 배열 전체
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 예제

```
let arr = [1, 2, 3, 4, 5] ;
let newArr = arr.filter( ( currentValue, index, array ) => {
	// 3보다 큰 숫자일 경우만 가져온다.
	return currentValue > 3 ;	
} ) ;
```

## forEach

배열 전체를 돌며 배열의 요소에 인자로 전달한 함수를 실행한다.

```
array.forEach(callback[, thisArg]) 
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : 해당 배열 전체
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 ) 

## map

배열의 모든 요소에 인자로 전달한 함수를 실행하고 그 결과를 모아서 새로운 배열을 반환한다.

```
array.map(callback[, thisArg]) ; 
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : map메소드가 적용되는 배열 전체
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 예제

```
let arr = [1, 2, 3, 4, 5] ;
let newArr = arr.map( item => {
	return item > 3 ;
} ) ;
console.log( newArr ) ;
// 결과 : [false , false, false, true, true]
``` 

## reduce

배열의 요소들을 하나씩 돌며, 이전 콜백의 리턴값을 받아 어떤 작업을 하고 싶을 때 사용한다.

```
array.reduce(callback[, initialValue])
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- previousValue : 이전 콜백에서 반환된 값 또는 초기값이 있는경우 initialValue
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : reduce메소드가 적용되는 배열 전체
- initialValue : 콜백이 처음 실행할때 인수(previousValue)로 사용하는 값 ( 선택 사항 )

### 예제

```
let arr = [1, 2, 3, 4, 5] ;
let sum = arr.reduce(function( prevValue, crntValue, index, array){
  return prevValue + crntValue ;
}, 0) ;
console.log( sum ) ;
// 결과 : 15
```

## some

배열 내 요소가 함수로 전달한 테스르를 통과하는 지 확인한다.
하나라도 테스트에 통과하면 true를 반환한다.

```
array.reduce(callback[, initialValue])
```

### 인자

- callback : 각 요소를 테스트하는 함수
	- currentValue : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : some메소드가 적용되는 배열 전체
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 예제

```
let result = [1, 2, 3, 4, 5].some(function( currentValue, index, array){
	return currentValue > 3 ;
}) ;

console.log( 'result : ', result ) ;
// result : true
```