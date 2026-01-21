import { Component } from "@angular/core";

@Component({
  selector: "app-button-inc-dec",
  templateUrl: "./button-inc-dec.html"
})
export class ButtonIncDec {
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter == 0) return;
    this.counter--
  }
}