import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  email:any = new FormControl('', [Validators.required, Validators.email]);
  checkoutForm = this.formBuilder.group({
    name: null,
    email: null,
    subject: null,
    message: null
  });

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'about')
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if(this.checkoutForm.value.name === null || this.checkoutForm.value.email === null || this.checkoutForm.value.subject === null || this.checkoutForm.value.message === null) {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      console.log(this.checkoutForm.value);
      //implementar post no banco
      this.snackBar.open("Mensagem enviada com sucesso, obrigado!", "dismiss",{duration: 5000})
      setTimeout( () => {this.router.navigate(['home'])}, 3000)
    } catch (error) {
      console.log(error)
    }
    this.checkoutForm.reset();
  }

}
