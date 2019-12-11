# 현재 시간 출력 및 크리스마스 디데이출력

- Date.getDate|getHour|getMinutes|getSeconds
- xmasDate = new Date("2019-12-24T00:00:00+0900"); // GMT형식의 날짜 초기화

```js
const clockUTC = document.querySelector(".js-clock__UTC");
const clockKST = document.querySelector(".js-clock__KST");
const clockXmasCounter = document.querySelector(".js-clock__xmasCounter");
const NINE_HOURS_MILLISECONDS = 32400000; //UTC와 KST(한국표준시)와의 차이는 9시간 => ms로 표현

function setClocks() {
  const nowDate = new Date();

  UTCDate = nowDate.getUTCDate();
  UTCHours = nowDate.getUTCHours();
  UTCMins = nowDate.getUTCHours();
  UTCSecs = nowDate.getUTCSeconds();
  clockUTC.innerHTML = `
  UTC : 
  ${UTCDate < 10 ? `0${UTCDate}` : UTCDate}D
  ${UTCHours < 10 ? `0${UTCHours}` : UTCHours}H 
  ${UTCMins < 10 ? `0${UTCMins}` : UTCMins}M 
  ${UTCSecs < 10 ? `0${UTCSecs}` : UTCSecs}S
  `;

  KSTDate = nowDate.getDate();
  KSTHours = nowDate.getHours();
  KSTMins = nowDate.getHours();
  KSTSecs = nowDate.getSeconds();
  clockKST.innerHTML = `
  KST : ${KSTDate < 10 ? `0${KSTDate}` : KSTDate}D 
  ${KSTHours < 10 ? `0${KSTHours}` : KSTHours}H 
  ${KSTMins < 10 ? `0${KSTMins}` : KSTMins}M 
  ${KSTSecs < 10 ? `0${KSTSecs}` : KSTSecs}S
  `;

  xmasDate = new Date("2019-12-24T00:00:00+0900");
  difference = new Date(xmasDate - nowDate - NINE_HOURS_MILLISECONDS);
  const dday = difference.getDate();
  const dhours = difference.getHours();
  const dmins = difference.getMinutes();
  const dsecs = difference.getSeconds();
  clockXmasCounter.innerHTML = `
  Xmas Counter : ${dday < 10 ? `0${dday}` : dday}D 
  ${dhours < 10 ? `0${dhours}` : dhours}H 
  ${dmins < 10 ? `0${dmins}` : dmins}M 
  ${dsecs < 10 ? `0${dsecs}` : dsecs}S
  `;
}
function init() {
  setClocks();
  setInterval(setClocks, 1000); // args : Handler | ms
}
```
