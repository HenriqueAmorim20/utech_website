import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(750) ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required ]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'info')
  }

  onSubmit() {
    if(this.checkoutForm.value.name === "" || this.checkoutForm.value.email === "" || this.checkoutForm.value.subject === "" || this.checkoutForm.value.message === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      console.log(this.checkoutForm.value);
      //implementar post no banco
      this.snackBar.open("Mensagem enviada com sucesso, obrigado! Redirecionando para home.", "dismiss",{duration: 5000})
      setTimeout( () => {this.router.navigate(['home'])}, 3000)
    } catch (error) {
      console.log(error)
    }
    this.checkoutForm.reset();
  }

}
