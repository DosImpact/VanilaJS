```
GMT
한국의 타임존은 보통 GMT+09:00 으로 표현된다. 여기서 GMT는 Greenwich Mean Time의 약자로서 경도 0도에 위치한 영국 그리니치 천문대를 기준으로 하는 태양 시간을 의미한다. GMT 시간은 1925년 2월 5일부터 사용하기 시작하였으며, 1972년 1월 1일까지 세계 표준시로 사용되었다.
```

```
UTC
GMT는 또한 UTC라고도 불리는데, 두 용어가 혼용되어서 사용되고 있기는 하지만 엄밀히 구분하자면 둘은 다른 의미를 가진다. UTC는 지구 자전주기의 흐름이 늦어지고 있는 문제를 해결하기 위해 1972년에 세슘 원자의 진동수에 기반한 국제 원자시를 기준으로 다시 지정된 시간대이다. 즉, UTC는 좀더 정확한 시간측정을 위해서 GMT를 대체하기 위해 제정된 새로운 표준이며, 시간적으로는 둘 사이에 아주 미세한 차이밖에 없지만, 소프트웨어에서 사용할 때는 UTC라고 하는 것이 더 정확한 표현일 것이다.

```
```
일반적으로 이런 데이터는 UTC를 기준으로 한 유닉스 시간이나 오프셋 정보가 포함된 ISO-8601와 같은 형태로 전송하게 된다. 
위의 예시에서 서울의 2017년 3월 10일 오후 9시 30분은 
유닉스 시간을 이용한다면 숫자 타입의 1489113000 이 될 것이고, 
ISO-8601을 이용한다면 문자열 타입의 2017-03-10T11:30:00+09:00 가 될 것이다.
```

```
자바스크립트의 Date 객체는 내부적으로 유닉스 시간과 같은 절대값으로 시간 데이터를 관리한다. 하지만 생성자나 parse() 함수, getHour(), setHour() 등의 메소드들은 모두 클라이언트의 로컬 타임존 (정확히는 브라우저가 실행되는 운영체제에 설정된 타임존)에 영향을 받는다. 그러므로 사용자가 입력한 데이터를 이용해 그대로 Date 객체를 생성하거나 값을 지정한다면 그 데이터는 클라이언트의 로컬 타임존을 그대로 반영하게 될 것이다.
```

```
이 때 사용할 수 있는 메소드가 바로 getTimeZoneOffset() 메소드이다. 이 메소드는 자바스크립트에서 로컬 타임존 정보를 알 수 있는 유일한 API라고 할 수 있는데, 현재 타임존의 오프셋을 분 단위의 숫자로 반환한다.

var seoul = new Date(1489199400000);
seoul.getTimeZoneOffset(); // -540
반환값 -540 은 타임존이 540분 앞서 있다는 의미이다. 서울의 오프셋이 +09:00 이란 걸 생각해보면 부호가 반대로 되어 있는 걸 알 수 있는데, 왜 그런지 모르겠지만 암튼 주의해야 한다. 이 방식을 기준으로 뉴욕의 오프셋 -05:00 을 계산해 보면 60 * 5 = 300 이 될 것이다. 이 840 만큼의 차이를 밀리초로 단위로 보정해서 새로운 Date 객체를 만들면, 그 객체의 getXX 메소드들을 이용해서 원하는 형태의 데이터를 만들어낼 수 있을 것이다. 간단한 포매터 함수를 만들어 결과를 비교해 보자.
```

```
UTC(Coordinated Universal Time): 세계 협정시

GMT(Greenwich Mean Time): 그리니치 평균시 
```
```
UTC 형식 : 1981-02-22T09:00Z (UTC 시간대일 경우 Z가 붙는다)

1981-02-22T09:00:00+09:00 (UTC 시간대가 아닐 경우 ±hh:mm, ±hhmm, ±hh을 붙인다)

JavaScript에서Date 생성시 반환값 (기본 GMT형식 / UTC로 변환/ Locale 적용 formmat)
```
```

console.log('TimeZone:', new Date().getTimezoneOffset())
->TimeZone Offset: -540 (한국 시간에서 9시간을 빼면 UTC Time)
```

```
var date = new Date(); //UTC 기준 현재시간을 생성함

console.log(date);  // 하지만 출력할때는 KST (로컬화) 되어서 출력 by TimeZoone Offset

-> Thu Oct 20 2016 15:06:08 GMT+0900 (KST)

console.log(date.toISOString()); //toISOString 을 통해 ISO1806 UTC 출력

-> 2016-10-20T06:15:26.812Z

console.log(date.toLocaleString()); // 로컬화 해서 출력

-> 2016. 10. 20. 오후 3:15:26
```

```
var d = new Date('2016-10-22T15:00:00.000Z'); //UTC기준 10월 22일 15시는 KST 으로 10월 23일 0시

console.log(d);

->Sun Oct 23 2016 00:00:00 GMT+0900 (KST)

console.log(d.toISOString());

->2016-10-22T15:00:00.000Z

console.log(d.toLocaleString());

->2016. 10. 23. 오전 12:00:00 //여기서 오전 12는 = 밤 12시 = 새벽 0시 = > 1시간이 지나면 => 오전 1시가 됨...
```

```
var d2 = new Date('2016-10-22T15:00:00+09:00'); //KST 기준으로 적은것

console.log(d2);

->Sat Oct 22 2016 15:00:00 GMT+0900 (KST)

console.log(d2.toISOString());

->2016-10-22T06:00:00.000Z

console.log(d2.toLocaleString());

->2016. 10. 22. 오후 3:00:00
```

```
var d3 = new Date('2016-10-22T15:00:00'); //UTC기준..

console.log(d3);

->Sun Oct 23 2016 00:00:00 GMT+0900 (KST)

console.log(d3.toISOString());

->2016-10-22T15:00:00.000Z

console.log(d3.toLocaleString());

->2016. 10. 23. 오전 12:00:00;
```

```
var d4 = new Date('2016-10-22 15:00:00'); // 이건 뭐지... Date에 T를 빠뜨려놓고

console.log(d4);

->Sat Oct 22 2016 15:00:00 GMT+0900 (KST)

console.log(d4.toISOString());

->2016-10-22T06:00:00.000Z

console.log(d4.toLocaleString());

->2016. 10. 22. 오후 3:00:00
```


결론. Javascritp에서 Date 객체를 인자를 주지 않고 생성할 경우 

new Date() = 컴퓨터에서 사용하는 Time Zone으로 인식, 현지시간을 반환 



시간 문자열 인자를 넘겨줄 경우

1) UTC 포멧의 UTC 시간 => UTC Time Zone으로 인식

2) UTC 포멧의 다른 Time Zone 시간 => 입력된 Time Zone으로 인식

3) UTC 포멧의  Time Zone표시가 없는 시간 => UTC Time Zone으로  인식

4) UTC 포멧이 아닌 시간 문자열 => 컴퓨터에서 사용하는 Time Zone으로 인식

=> 1,2,3,4번 에서 인식된 Time Zone으로 현지시간을 계산하여 반환 



출처: https://5hyel.tistory.com/12 [HYEL & TSAR]