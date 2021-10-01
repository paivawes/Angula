import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/Person';
import { UserLogin } from '../model/UserLogin';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient

  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://wespaiva.herokuapp.com/user/login', userLogin)

  }

  register(person: Person):Observable<Person>{
    return this.http.post<Person>('https://wespaiva.herokuapp.com/user/register', person)

  }



}
