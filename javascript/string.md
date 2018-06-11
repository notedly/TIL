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

## slice

문자열 일부를 추출하면서 새로운 문자열을 반환한다.

### 문법

```
string.slice( beginIndex[, endIndex]) ;
```

### 인자

- beginIndex : 추출시작점 인덱스를 지정한다. 인덱스는 0부터 시작이다.
만약 음수라면 beginIndex는 문자열 길이 + beginIndex로 계산된다.
beginIndex가 문자열 길이보다 크거나 같은 경우에는 빈 문자열을 반환한다.
- endIndex : 추출 종료점 인덱스를 지정한다. 해당 인덱스 직전까지 추출된다. endIndex가 생략된다면, slice()는 문자열 마지막까지 추출한다. 만약 음수라면 endIndex는 문자열 길이 + endIndex로 계산된다.

### 예제

```
let str = 'Hello world!' ;
console.log( str.slice(1, 3) ) ;		// el
console.log( str.slice(4, -2) ) ;	// o worl
console.log( str.slice(6) ) ;			// world!
console.log( str.slice(20) ) ;		// ''
```

## repeat

원래 문자열을 전달한 인자 만큼 반복되는 새 문자열 반환한다.

### 문법

```
string.repeat( count ) ;
```

### 인자

- count : 문자열을 반복할 횟수이다. 인자가 음수이거나 +Infinity인 경우에는 RangeError을 throw합니다.

### 예제

```
'abc'.repeat( 3 ) ;		// 'abcabcabc';
```