
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin: UserLogin = new UserLogin


  constructor(
    private auth: AuthService,  
    private router: Router
    
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  login(){
    this.auth.login(this.userlogin).subscribe((resp: UserLogin)=>{
      this.userlogin = resp 

      environment.id = this.userlogin.id
      environment.name = this.userlogin.name
      environment.photo = this.userlogin.photo
      environment.token = this.userlogin.token

      console.log(environment.id)
      console.log(environment.name)
      console.log(environment.photo)
      console.log(environment.token)

      this.router.navigate(["/home"])
    }, erro =>{
      if(erro.status == 500){
        alert("Usuário ou senha inválida!")
      }
    })
  }

}
