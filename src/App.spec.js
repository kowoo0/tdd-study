import App from "./App";
import matcher from "@testing-library/jest-dom";

expect.extend(matcher);

test("APP 초기화", () => {
  document.body.innerHTML =  `<div class="root"></div>`;
  const root = document.querySelector(".root");
  new App(root, 0);

  const counter = root.querySelector('.counter');
  expect(counter.querySelector('button.plus')).toHaveTextContent('-')
  expect(counter.querySelector('button.minus')).toHaveTextContent('-')
  expect(counter.querySelector('div.number')).toHaveTextContent('0')
})