# 캔버스 마스크 프로젝트

- 튜토리얼

1. TASK01 기본 드로잉 캔버스
2. TASK02 드로잉 캔버스 + 이미지
3. TASK03 이미지 마스크 저장

- input 이미지를 넣으면
- 마스크를 그릴수있는 프론트앤드
- 결과물로 마스크와 사진을 분리해서 저장할수있다.

- 문제점

1. canvas 위치에 따른 clientX,clientY문제
2. canvas layer분리

- position relative로 일딴 해결, 이미지 크기를 구해서 -> img w,h = canvas w.h 를 일치시켜야 함.

3. canvas img to mask 변환

- rgb -> rgba로 저장하기. 애초에 img는 병풍이라 그럴 필요 없다.
- 해결

```js
function canvasMakeMask() {
  ctx.globalCompositeOperation = "xor";
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, CANVA_W, CANVA_H);
}
```
