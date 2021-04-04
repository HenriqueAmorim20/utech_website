import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  recoverForm: FormGroup = new FormGroup({
    email_recover: new FormControl('', [Validators.email, Validators.required ]),
  });
  hide = true;
  recover: boolean = false;


  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'account')
  }
  login() {
    if(this.loginForm.value.email === "" || this.loginForm.value.password === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      console.log(this.loginForm.value);
      //implementar post no bando
    } catch (error) {
      this.snackBar.open("Email ou senha inválidos!", "dismiss",{duration: 3000})
    }
    // this.loginForm.reset();
  }

  register(){
    console.log('Redirect register');
  }

  recoverPassword(){
    console.log(this.recoverForm.value.email_recover)
    if(this.recoverForm.value.email_recover === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      console.log(this.recoverForm.value);
      //implementar post no bando
    } catch (error) {
      this.snackBar.open("Email não encontrado!", "dismiss",{duration: 3000})
    }
  }

  toggleView1(value: boolean){
    this.recover = value;
  }

}
