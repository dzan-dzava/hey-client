import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createUser() {
    return this.http.post('http://localhost:3000/api/user/signup', {
      email: 'mail.com',
      username: 'username',
      password: 'pass1',
      firstName: 'first name',
      lastName: 'last name',
      gender: 'male'
    })
  }
}
