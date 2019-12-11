```js
<input
  type="range"
  min="1"
  max="100"
  value="50"
  class="slider"
  id="myRange"
  oninput="showVal(this.value)"
  onchange="showVal(this.value)"
/>
```

```js
function showVal(newVal) {
  console.log(newVal);
}
```

```js
function handleInput(event) {
  console.log(parseInt(event.target.value));
}
function init() {
  console.dir(myRange);
  myRange.addEventListener("input", handleInput);
  //myRange.addEventListener("change", showVal);
}
```
