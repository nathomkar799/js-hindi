# Projects realted to DOM


[ Click Here ] (
    https://stackblitz.com/edit/dom-project-chaiaurcode-h1ydzobb?file=1-colorChanger%2Fchaiaurcode.js)

## 1 Color changer

```javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);

    if (e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
});


```
## 2 BMI Calculator


```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```


## 6 Unlimited Colors

```javascript
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let checkPoint;
const startChanging = function () {
  checkPoint = setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 0);
};

const stopChanging = function () {
  clearInterval(checkPoint);
};

// console.log(randomColor())
document.querySelector('#start').addEventListener('click', startChanging);

document.querySelector('#stop').addEventListener('click', stopChanging);

```