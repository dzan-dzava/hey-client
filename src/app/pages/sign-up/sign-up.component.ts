import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'hey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public currentDate: Date = new Date();
  public currentDay: number = this.currentDate.getDate();
  public currentMonth: number = this.currentDate.getMonth() + 1;
  public currentYear: number = this.currentDate.getFullYear();
  public days: number[] = Array(31)
    .fill(null)
    .map((_, i) => i + 1);
  public months: string[] = [
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
  public startYear: number = 1900;
  public years: number[] = Array(this.currentYear - this.startYear + 1)
    .fill(null)
    .map((_, i) => this.currentYear - i);
  public signUpForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdayDay: ['', Validators.required],
      birthdayMonth: ['', Validators.required],
      birthdayYear: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  signUp(): void {
    this.submitted = true;
    console.log(this.signUpForm.valid);
    
    // this.authenticationService.createUser()
    //   .subscribe(res => console.log(res))
  }
}
