# Statements

자바스크립트 문법

## for...in

객체의 프로퍼티를 순회하는 데 사용된다.

### 문법

```
for( variable in object ) {
	statements
}
```

### 매개 변수

- variable : Object 의 속성 이름 또는 array의 요소 인덱스 일 수 있는 변수
- Object : 반복할 개체 또는 배열
- statements : Object의 각 속성 또는 array의 각 요소에 실행 할 하나 이상의 문

### 예제

```
let obj = { x : 10, y : 20, z : 30 } ;
for( key in obj ){
	console.log( 'key :' + key + ', value : ' + obj[key] ) ;
}
// key :x, value : 10
// key :y, value : 20
// key :z, value : 30

let arr = [ 1, 2, 3 ] ;
for( key in arr ) {
	console.log( 'key :' + key + ', value : ' + arr[key] ) ;
}
// key :0, value : 1
// key :1, value : 2
// key :2, value : 3
```