import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>
      Warning!
    </p>
  `,
  styles: [`
    p {
      padding: 10px;
      background-color: lightyellow;
      color: orange;
      border: 1px solid orange;
      border-radius: 5px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
