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
