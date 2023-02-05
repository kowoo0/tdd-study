import { createElement } from "./Utils";

export default class App {
  constructor(root, defaultValue) {
    this.number = defaultValue;

    this.counter = createElement("div", "counter");
    root.appendChild(this.counter);

    this.plus = createElement("button", "plus", "+");
    this.counter.appendChild(this.plus);

    this.minus = createElement("button", "minus", "-");
    this.counter.appendChild(this.minus);

    this.display = createElement("div", "number", this.number);
    this.counter.appendChild(this.display);

    this.plus.addEventListener("click", () => this._increase());
    this.minus.addEventListener("click", () => this._decrease());
  }
  getNumber() {
    return this.number;
  }
  _decrease() {
    let next = this.number - 1;
    next = (next < 0) ? 9 : next;
    this.display.innerHTML = next;
    this.number = next;
  }
  _increase() {
    let next = this.number + 1;
    next = (next > 9) ? 0 : next;
    this.display.innerHTML = next;
    this.number = next;
  }
}