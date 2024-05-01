let hi; //let 키워드 이용해서 hi라는 변수 선언
hi = "이소원"; //let으로 선언한 변수는 값 변경이 가능

let name = '홍길순'; // 변수선언과 초기화

const hello = '안녕하세요';
//const : 상수 선언
// const 선언은 반드시 초기값을 같이 부여함,let과 달리 값 변경이 불가능(상수).

console.log(hi);
console.log(name);
console.log(hello)

// 변수나 상수 이름 작성 규칙
//1. 첫번째 글자는 영어,$,_만 가능
//2. 두번째 글자부터는 숫자도 가능
//3. 영어 소문자와 대문자는 구별됨(abc != ABC)
//4. let,const 자바 스크립트 예약어는 사용 불가
//5. 이름에 공백은 허용 안됨(CamelCase 방식, SnakeCase방식 사용)
// who_am_I(SnakeCase 방식)