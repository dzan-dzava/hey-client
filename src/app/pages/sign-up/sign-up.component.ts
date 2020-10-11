import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public currentDate = new Date();
  public currentDay: number = this.currentDate.getDate();
  public currentMonth: number = this.currentDate.getMonth() + 1;
  public currentYear: number = this.currentDate.getFullYear();
  public days: number[] = Array(31)
    .fill(null)
    .map((_, i) => i + 1);
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public startYear = 1900;
  public years: number[] = Array(this.currentYear - this.startYear + 1)
    .fill(null)
    .map((_, i) => this.currentYear - i);

  constructor() { }

  ngOnInit(): void {
  }

}
