[모멤텀 by Kim Do Young](https://dosimpact.github.io/VanilaJS/js4/index.html)

# 바닐라 자바스크립트 01 크롬 익스텐션의 모멘텀 클론 코딩

[강의링크](https://academy.nomadcoders.co/courses/435558/lectures/6689819)

## #1 이론

- 프론트 엔드를한다면 무조건 자바스크립트를 해야한다. 반면 백앤드는 여려 선택지가 있다.
- 자바스크립트 하나로 인터렉티브 웹을 만드니까 그 하나만 배워도 많은것들을 할수있고 발전이 빠르고, 깊다..
- JS로 할수있는것들

1. 웹, 웹앱, 테스크톱 엡, 네이티브 앱, 웹 어플리케이션 (eg) 아톰은 js로만들어진 테스크톱앱
2. Web에서 나의 위치를 가져올수 있고, 웹에서 로컬저장소를 이용가능, realtime 채팅이 가능하다.
3. 100% 네이티브앱을 만들수있다. 노마드 무비 처럼
4. 실시간 웹 게임을 만들수있다. Impact js

- Js 의 Version

1. ECMAscripts는 js Specification이다. 체계메뉴얼 같은것, 설명서 같은것임. 이 specification을 받아서 각 브라우저가 동작을 하겠끔 만드는 것이다.  
   예를들어 크롬ES6를 지원한다고 하면, 새로운 specification을 적용했다고 봄.

- 바닐라JS을 배워야 되는 이유.

1. 처음에 바닐라 JS를 배우고 익혀서 그다음으로 라이브러리랑 프레임워크를 다뤄라. 제대로된 실력을 발휘하려면 기본을 닦아야 지.  
   ex)포토샵 툴은 잘 다루는데, 보정결과가 별로임 색감의 이해 부족등등

- js는 HTML,CSS도 바꿀수 있지만, 이벤를 처리하기 위해서임  
  클릭,리사이즈,서빗,인풋체인지,로드,닫기전 후, 등등

[DOM MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

- JS 심플 이벤트 핸들러 예제

[Example](/js3/README.md)

- 실전 JS 모멘톰 만들기

1. 현재시간을 가져오는 Date클래스, 그리고 출력 폼``만들기, 10보다 작은것들을 01~09로 만들어줌.
2. 로컬 스토리지 사용하기

```javascript
localStorage.setItem("nico", true);
localStorage.getItem("nico");
```

- js의 localStorage는 데이터를 모두 string으로만 저장한다. 그래서 object를 string으로 만들어야됨.  
  JSON을 이용한다. JSON = Js object notation = 자바스크립트의 객체를 string을 변환,역변환 역활.

- 버튼이 눌린거는 알겠는데, 어떤버튼이 눌렸는지는 모름 ---> event.target

- array filter 기능

```javascript
function filterFn(toDo) {
  //array에 foreach filter -> filterFn -리턴이 true만 배열에서 골라내 새로운 array만듬.
  return toDo.id === 1;
}
const toDos = [];

//버튼이 눌린거는 알겠는데, 어떤버튼이 눌렸는지는 모름 ---> event.target
function deleteToDo(event) {
  //이제는 어떤 버튼인지는 알겠는데,어떤경로로 왔는지 모르겠어-> dir출력 & parentNode정보를 알게됨.
  //console.dir(event.target.parentNode);
  //HTML상에서만 제거
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //순회결과 filterFn이 참인것들로 새로운 array 만듦.
  const cleanToDos = toDos.filter();
  console.log(cleanToDos);
}
```

- js Math.[random | floor | ceil]
  랜덤수 출력 | 내림 | 올림 함수

- js에서 key 값과 value값이 같다면 다음과 같이 줄여 쓰기 가능.

```javascript
//js에서 key 값과 value 값이같다면 다음과 같이 하나만 써주면 된다.
const coordsObj = {
  latitude,
  longitude
};
```

- js로 api 리퀘스트 보내서 json 얻어와서 날씨 표현하기
  [날씨정보 api 받아와서 사용하기](https://home.openweathermap.org/api_keys)

1. 회원가입후 api key를 받아온다
2. js를 통해서 리퀘스트로 데이터를 받고 , 새로고침 없이 데이터를 표현해 줄 수 있다.  
   이게 js가 강력한 이유 !! 메일 함도 새로고침 없이 리프레쉬 된 것을 볼 수 있다.!!

# 바닐라 자바스크립트 02 바닐라JS로 게임만들기
