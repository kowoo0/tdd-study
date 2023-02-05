import App from "./App";
import matcher from "@testing-library/jest-dom";

expect.extend(matcher);

test("APP 초기화", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  new App(root, 0);

  const counter = root.querySelector('.counter');
  expect(counter.querySelector('button.plus')).toHaveTextContent('+')
  expect(counter.querySelector('button.minus')).toHaveTextContent('-')
  expect(counter.querySelector('div.number')).toHaveTextContent('0')
})

test("getNumber()", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  const app = new App(root, 0);

  expect(app.getNumber()).toBe(0);
})

test("increase", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  const app = new App(root, 0);

  const plus = root.querySelector(".plus");
  plus.click();

  expect(app.getNumber()).toBe(1);
})

test("increase 10 times", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  const app = new App(root, 0);

  const plus = root.querySelector(".plus");
  for (let i=0; i<10; i++) {
    plus.click();
  }

  expect(app.getNumber()).toBe(0);
})

test("decrease", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  const app = new App(root, 0);

  const minus = root.querySelector(".minus");
  minus.click();

  expect(app.getNumber()).toBe(9);
})

test("decrease 2 times", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  const app = new App(root, 0);

  const minus = root.querySelector(".minus");
  minus.click();
  minus.click();

  expect(app.getNumber()).toBe(8);
})