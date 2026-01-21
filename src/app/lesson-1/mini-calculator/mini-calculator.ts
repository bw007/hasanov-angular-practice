import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-mini-calculator",
  templateUrl: "./mini-calculator.html",
  imports: [FormsModule]
})
export class MiniCalculator {
  result: number = 0;

  n1: number = 0;
  n2: number = 0;

  add() {
    this.result = this.n1 + this.n2;
  }

  subtraction() {
    this.result = this.n1 - this.n2;
  }

  multiplication() {
    this.result = this.n1 * this.n2;
  }

  division() {
    if (this.n2 === 0) {
      alert("Nolga bo'lish mumkin emas!!!");
      return;
    }
    this.result = this.n1 / this.n2;
  }

  clear() {
    this.n1 = 0;
    this.n2 = 0;
    this.result = 0;
  }
}