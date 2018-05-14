# String

문자열 객체

## split

문자열을 인자로 주어진 기준으로 쪼개서 배열에 담는다.

### 문법

```
string.split( separator, limit ) ;
```

### 인자

- separator : 문자열을 분리하는 기준 문자열, 사용하지 않으면 전체 문자열을 하나의 배열 원소로 담아 리턴한다. ( 데이터형 : string / 생략 가능 )
- limit : 리턴되는 배열의 숫자를 제한한다. ( 데이터형 : number / 생략 가능 ) ;

### 예제

```
let str = 'ABCD' ;
let result = str.split('') ;
console.log( result ) ;	// [ 'A', 'B', 'C', 'D' ] ;

let str2 = 'A,BC,D' ;
let result2 = str2.split(',') ;
console.log( result2 ) ;	// [ 'A', 'BC', 'D' ] ;
```