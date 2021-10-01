import { Component, OnInit } from "@angular/core";
import { Person } from "../model/Person";




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  person: Person = new Person
  confirmPass: string
  typeUser: string
 

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
    
  }

  confirmPassword(event: any){
    this.confirmPass = event.targe.value
  }

  userType(event: any){
    this.typeUser = event.targe.value
   }

  confirmPerfil(){
    
  }

}
