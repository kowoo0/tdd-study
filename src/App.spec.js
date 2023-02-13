import App from "./App";

let root;
let app;

beforeEach(() => {
  document.body.innerHTML =  `<div class="root"></div>`;
  root = document.querySelector(".root");
  app = new App(root, 0);
})

afterEach(() => {

})

test("APP 초기화", () => {
  const counter = root.querySelector('.counter');
  expect(counter.querySelector('button.plus')).toHaveTextContent('+')
  expect(counter.querySelector('button.minus')).toHaveTextContent('-')
  expect(counter.querySelector('div.number')).toHaveTextContent('0')
})

test("getNumber()", () => {
  expect(app.getNumber()).toBe(0);
})

test.each([ [1, 1], [10, 0] ])("increase %i times(0 -> %i)", (repeat, expected) => {
  const plus = root.querySelector(".plus");

  for (let i=0; i<repeat; i++) {
    plus.click();
  }

  expect(app.getNumber()).toBe(expected);
})

test.each([ [1, 9], [10, 0] ])("decrease %i times(0 => %i)", (repeat, expected) => {
  const minus = root.querySelector(".minus");

  for (let i=0; i<repeat; i++) {
    minus.click();
  }

  expect(app.getNumber()).toBe(expected);
})