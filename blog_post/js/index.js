let arrNum = [ 1, 2, 3, 4, 5 ] ;
let sum = arrNum.reduce(function( prev, crnt, crntIdx, array ){
	return prev + crnt ;
}) ;


let a = '1' && 123 ;

let arrName = ['bob', 'mike', 'john', 'bob', 'jane', 'mike' ] ;

let result = arrName.reduce((prev, crnt, crntIdx, array) => {
	if( prev.indexOf(crnt) < 0 ) prev.push(crnt) ;
	return prev ;
}, []) ;


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


/* Array of twins */
function twins(myArray){
	return myArray.every((item, idx) => myArray.filter((item) => myArray[idx] == item ).length == 2 ) ;
}

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



let arrNum2 = [ 2, 4, 6, 7, 10 ] ;
let result2 = arrNum2.every(function( crnt, crntIdx, array ){
	return crnt % 2 == 0 ;
}) ;


let arr = [ 1, 3, 10, 5, 7 ] ;
let result3 = arr.some(function( crnt, crntIdx, array ){
	// console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;
// console.log( result3 ) ;

let arr2 = [ 1, 2, 3, 4, 5 ] ;
let result4 = arr2.filter(function( crnt, crntIdx, array ){
	// console.log( crntIdx + '번째 요소의 테스트 결과 : ', crnt % 2 == 0 ) ;
	return crnt % 2 == 0 ;
}) ;


function pluck(objs, name) {
	/* filter : 객체 속성중 name 과 같은 속성이 있는 것들 분류 */
	/* map 함수를 사용하여 값들만 추출 해서 새로운 배열로 만든다. */
	let newArr = objs.filter(item =>	Object.keys( item ) == name ) ;
	return newArr ;

}
pluck( [{a:1}, {a:2}], 'a' ) ;
pluck( [{a:1}, {b:4}, {a:7}, {b:12}, {b:32}], 'b' ) ;


let names = [ 'jjackkun', 'nena', 'ridersong', 'keunho' ] ;
let newArray = names.map(function( crnt, crntIdx, array ){
	return (crntIdx+1) + '. ' + crnt ;
}) ;
console.log( newArray ) ;
// ["1. jjackkun", "2. nena", "3. ridersong", "4. keunho"] ;

console.log( names ) ;
// ["jjackkun", "nena", "ridersong", "keunho"]

var arrPerson = [ {name:'John', age:30}, {name:'Mike', age:20}, {name:'Bob', age: 23} ];
let result5 = arrPerson.map(function(crnt, crntIdx, array){
	let obj = {} ;
	obj[crnt.name] = crnt.age ;
	return obj ;
}) ;

console.log( result5 ) ;
// [ {John: 30}, {Mike: 20}, {Bob: 23} ]


let arr3 = [ '가', '나', '다', '라', '마' ] ;
let copyArr = [] ;

arr3.forEach(function(crnt, crntIdx, array){
	copyArr.push( crnt ) ;
}) ;
console.log( 'arr3 : ', arr3 ) ;
console.log( 'copyArr : ', copyArr ) ;

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
[2, 5, , 9].forEach(logArrayElements);



let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ;
num.forEach(function(crnt, crntIdx, array) {
	array[crntIdx] = !( crnt % 2 ) ? crnt * 2 : crnt ;
}) ;
console.log( num ) ;


















