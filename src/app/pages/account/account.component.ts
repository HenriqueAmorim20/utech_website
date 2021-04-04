import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
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
  hide = true;


  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'account')
  }
  onSubmit() {
    if(this.loginForm.value.email === null || this.loginForm.value.password === null) {
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

}
