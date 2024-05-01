//원시 데이터 타입 : 개체가 아니면서 메서드로 가지지 않는 데이터
// String, number, bigint, boolean, undefind, null,symbol
const aa = 123n; // number 타입 데이터 입력
// var abc = 123;
// var abc = 345;
console.log(typeof aa); //aa 상수의 데이터 타입을 출력해 봄

const name = '이소원';
console.log(typeof name);

const age = 30;
const job = '개발자';
const msg = '저는' + job + '이고, ' + age + ' 살 입니다.';
const msg2 = `저는 ${job} 이고, ${age} 살 입니다.`;
// ` : 백틱 
console.log(msg);
console.log(msg2)

const istrue = 10<20; //boolean 데이터 입력
console.log(typeof istrue);

/// null : 값이 없음
// undefind : 아직 값이 지정되지 않음 

let hello;
console.log(hello)

//참조 데이터 타입( 배열과 객체)
const arr = [1,2,3]; // 배열 데이터 생성
console.log(arr[0]);

//객체 정의 : 객체는 키와 값으로 구성한 property들로 구성함
const obj = {
    name : '홍길동',
    job : '개발자'
};
console.log(obj);
console.log(obj.name);
console.log(obj ['name']);

//배열과 객체는 중첩 가능
const arr1 = [1,2,3,[4,5]]; // 중첩
console.log(arr1);

const arr2 = [1,2,3,
    {name:'홍길동'}]; // 배열안에 객체를 중첩해서 넣음
console.log(arr2);