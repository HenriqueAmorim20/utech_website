import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  email:any = new FormControl('', [Validators.required, Validators.email])

  loginForm = this.formBuilder.group({
    email: null,
    password: null
  });


  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'account')
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
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
    this.loginForm.reset();
  }

}
