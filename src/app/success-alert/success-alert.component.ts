import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p>
      Success!
    </p>
  `,
  styles: [`
    p {
      padding: 10px;
      background-color: lightgreen;
      color: darkgreen;
      border: 1px solid darkgreen;
      border-radius: 5px;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
