import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Credit Calculator</h2>
    <div>
      <label>Credit amount: </label>
      <input type="text" [(ngModel)]="credit" />
    </div>
    <div>
      <label>Rate: </label>
      <select [(ngModel)]="rate">
        <option>1</option>
        <option>5</option>
        <option>10</option>
      </select>
    </div>
    <div>
      <button (click)="myPayment()">Calculate</button>
    </div>
    <hr />
    <h3>Monthly Payment:{{payment}}</h3>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  credit: number = 10000;
  rate: number = 1;
  payment: number = 0;

  myPayment() {
    this.payment = this.credit / this.rate;
  }
}
