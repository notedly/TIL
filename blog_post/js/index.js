let arrNum = [ 1, 2, 3, 4, 5 ] ;
let sum = arrNum.reduce(function( prev, crnt, crntIdx, array ){
	console.log( prev, crnt ) ;
	return prev + crnt ;
}) ;
console.log( 'sum :', sum ) ;


let a = '1' && 123 ;
console.log( 'a :', a ) ;

let arrName = ['bob', 'mike', 'john', 'bob', 'jane', 'mike' ] ;
console.log( 'arrName : ', arrName ) ;

let result = arrName.reduce((prev, crnt, crntIdx, array) => {
	if( prev.indexOf(crnt) < 0 ) prev.push(crnt) ;
	return prev ;
}, []) ;

console.log( 'result :', result ) ;

/* Nice Array */
function isNice(arr){
	return arr.length < 1 ? false : arr.every(elem => arr.some(item => elem == item + 1 || elem == item - 1)) ;
}
isNice([2,10,9,3]) ;
isNice([]);


/* zero-balanced Array */
function ìsZeroBalanced(n){
	// return n.length > 0 ? ( n.reduce((a,b) => a+b) === 0 ? true : false ) : false ;
	return n.length > 0 && n.every(e => n.includes(-e)) && n.reduce((a,b) => a+b) === 0 ;
}

// console.log( ìsZeroBalanced([3]) ) ;

/* Array of twins */
function twins(myArray){
	return myArray.every((item, idx) => myArray.filter((item) => myArray[idx] == item ).length == 2 ) ;
}
// console.log( twins([2,16,2,17,2,16]) ) ;

/* Possiblities Array */
/*
길이가 n 인 비어 있지 않은 배열 a는 [0, a.length-1] 사이의 모든 숫자를 포함하는 경우 모든 가능성의 배열이라고합니다. 정수 배열을 허용하는 isAllPossibilities라는 메서드를 쓰고 배열이 모든 가능한 배열, 그렇지 않으면 거짓.
*/
function isAllPossibilities(x){
	// [0, x.length - 1 ]
	// let result = Array.from({ length : x.length}, (v, k) => k) ;

	// return x.length && x.every((item, i) => x.includes(i)) ;
	return x.length > 0 ? x.every((item, i) => x.includes(i)) : false;

}

// console.log( isAllPossibilities([0, 1,5,6]) ) ;


let arrNum2 = [ 2, 4, 6, 7, 10 ] ;
let result2 = arrNum2.every(function( crnt, crntIdx, array ){
	console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;

console.log( 'result : ', result2 ) ;

