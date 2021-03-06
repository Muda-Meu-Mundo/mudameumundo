import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   httpOptions ={
    headers: new HttpHeaders({'Content Type':'application/json'})
   }

  public signup: FormGroup;
  public submitAttempt: boolean = false;  
  

  constructor(private router: Router,public formBuilder: FormBuilder,private httpClient: HttpClient) {
    this.signup = formBuilder.group({
      Photo:[],
      Name: ['',Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      Email: ['',Validators.compose([Validators.required, Validators.email])],
      Password: ['',[Validators.required]],
      Address: ['',[Validators.required]],
      Phone: ['',[Validators.required]],
      PFrutas: [''],
      PGraos: [''],
      PLegumes: [''],
      PRaizes: [''],
      PVerduras: ['']


  });
   }

  ngOnInit() {
    
  }

  register(){
    this.submitAttempt = true;
        if(!this.signup.valid){
            this.signup}
        else {
            console.log("success!")
            console.log(this.signup.value);
              const userInfo =   {
                'username': this.signup.value["Name"]};
              
              this.httpClient.post('http://localhost:4000/teste3',userInfo)

              this.router.navigate(['login'])
         }
        }
      }
