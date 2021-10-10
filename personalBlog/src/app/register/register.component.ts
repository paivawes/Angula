import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Person } from "../model/Person";
import { AuthService } from "../service/auth.service";




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  person: Person = new Person
  confirmPass: string
  typeUser: string
 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
  }

  confirmPassword(event: any){
    this.confirmPass = event.target.value
  }

  userType(event: any){
    this.typeUser = event.target.value
   }

  createUser(){
    this.person.userType = this.typeUser

    if(this.person.password != this.confirmPass){
      alert("As senhas não são iguais")
    } else{
      this.authService.register(this.person).subscribe((resp: Person) => {
        this.person = resp
        this.router.navigate(["/login"])
        alert("Usuário cadastrado com sucesso!")
      })
    }

  }

}
