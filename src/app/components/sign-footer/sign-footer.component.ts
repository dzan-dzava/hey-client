import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hey-sign-footer',
  templateUrl: './sign-footer.component.html',
  styleUrls: ['./sign-footer.component.scss']
})
export class SignFooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
