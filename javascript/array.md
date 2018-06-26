
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

## slice

배열 요소에서 특정 부분을 추출해서 새로운 배열 객체로 반환한다.
원본배열은 수정되지 않는다.

```
array.slice()
array.slice(begin)
array.slice(begin, end)
```

### 인자

- begin : 추출 시작점의 인덱스번호(0부터시작), 음수 인덱스는 배열의 끝에서부터의 길이를 나타낸다. begin이 undefined인 경우에는 0번 인덱스부터 slice한다.
- end : 추출을 종료할 인덱스번호, 인덱스를 제외하고 추출한다(인덱스번호 앞까지의 요소들을 추출), 음수 인덱스는 배열의 끝에서부터의 길이를 나타낸다. end가 생략되면 slice는 배열의 끝까지(array.length) 추출한다.

### 예제

```
let array = ['A', 'B', 'C', 'D', 'E', 'F'] ;
array.slice(0, 2) ;		// ['A' ,'B']
```

## splice

배열에 있는 요소를 삭제하거나 새로운 요소를 추가한다.

```
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
```

### 인자

- start : 배열의 변경을 시작하는 인덱스이다. 0부터 시작한다. 만약 배열의 길이보다 길면 실제 시작 인덱스는 배열의 길이로 설정된다. 음수의 경우, 배열의 끝에서 부터 요소를 세어나간다. 그 값의 절대값이 배열의 길이보다 큰 경우 0으로 설정된다.
- deleteCount : 배열에서 제거를 할 요소의 수입니다. 0일 경우 아무런 요소도 제거 되지 않는다. 이 경우, 최소한 하나의 새요소를 특정해줘야 한다. 만약 deleteCount가 start에서 부터의 남은 요소 수보다 많을 경우, 남은 요소를 모두 제거한다.
- itemN : 배열에 추가될 요소이다. 생략 시, splice()는 요소를 삭제만 하게된다.

### 예제

```
let name = ['Mike', 'John', 'Bob', 'Jane'] ;

// 요소 추가
name.splice(2, 0, 'Sam') ;
// [ 'Mike', 'John', 'Sam', 'Bob', 'Jane' ]

// 요소 삭제
name.splice(0, 2) ;
// [ 'Sam', 'Bob', 'Jane' ]
```

## fill

인자로 전달한 시작 위치부터 끝 인덱스까지 지정한 값으로 배열 요소들을 채운다.

```
array.fill( value, start, end )
```

### 인자

- value : 배열을 채우기 위한 값
- start : 채우기를 시작할 시작 인덱스, 기본 값은 0(선택사항)
- end : 끝 인덱스, 기본 값은 배열의 길이(선택사항)

### 예제

```
let arr = [ 1, 2, 3, 4, 5, 6, 7 ] ;

arr.fill( 0, 1, 3 ) ;

console.log( arr ) ;
// [ 1, 0, 0, 4, 5, 6, 7 ]
```

## from

유사 배열 or 반복 가능한 객체로부터 새 배열을 만든다.

```
Array.from( arrayLike[, mapFnn[, thisArg]] )
```

### 인자

- arrayLike : 배열로 변환할 유사 배열 or 반복 가능한 객체
- mapFn : 배열의 모든 요소에 호출 할 Map함수(선택사항)
- thisArg : mapFn 실행 시에 this로 사용할 값

### 예제

```
let foo = Array.from('foo') ;
console.log( foo ) ;
// [ 'f', 'o', 'o' ]

let num = Array.from([1, 2, 3], x => x + x) ;
console.log( num ) ;
// [ 2, 4, 6 ]

let arrNum = Array.from( { length : 5 }, (v, k) => k ) ;
console.log( arrNum ) ;
// [ 0, 1, 2, 3, 4 ]
```

## includes

배열에 특정 요소가 포함되어 있는지 여부를 확인한다.

```
array.includes( searchElement, fromIndex )
```

### 인자

- searchElement : 검색할 요소
- fromIndex : 검색을 시작할 위치이다. 음수 값은 array.length + fromIndex, 기본 값은 0 이다.

### 반환값

boolean( true or false )

### 예시

```
let array = [ 1, 2, 3, 4, 5 ] ;
array.includes(4) ;	// true
array.includes(6) ;	// true
array.includes(2, 2) ;	// false
array.includes(5, -1) ;	// true
```

## find

콜백으로 전달받은 함수가 요구하는 조건에 만족하는 첫번째 값 하나를 반환한다. 그렇지 않으면 undefined를 반환한다.

```
array.find( callback[, thisArg] )
```

### 인자

- callback : 배열의 각 값에 대해서 실행시킬 함수이다. 아래 세 인자값을 받는다.
	- element : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : find메소드가 적용되는 배열 전체
- thisArg : callback을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 반환값

element가 테스트를 통과하면 배열 안의 값을 반환, 값이 없다면 undefinedf를 반환

### 예시

```
let array = [ 1, 2, 3, 4, 5 ] ;
let find = array.find(function(element){
	return element % 2 == 0 ;
}) ;
console.log( find ) ;	// 2
```

## findIndex

테스트함수를 만족하는 배열의 첫번째 요소에 대한 인덱스를 반환한다. 그렇지 않으면 -1을 반환한다.

```
array.findIndex( callback[, thisArg] )
```

### 인자

- callback : 배열의 각 값에 대해서 실행시킬 함수이다. 아래 세 인자값을 받는다.
	- element : 현재 처리 중인 요소
	- index : 현재 처리 중인 요소의 인덱스
	- array : find메소드가 적용되는 배열 전체
- thisArg : findIndex을 실행할 때 this로 적용할 값 ( 선택 사항 )

### 반환값

요소가 테스트를 통과하면 해당 요소의 인덱스를 반환하고, 그렇지 않으면 -1을 반환한다.

### 예시

```
let array = [ 1, 2, 3, 4, 5 ] ;
let findIdx = array.findIndex(function(element){
	return element > 1 ;
}) ;
console.log( findIdx ) ;	// 1
```

