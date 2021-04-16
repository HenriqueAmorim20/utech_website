import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AccountService } from './account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations:[
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(500) ])
    ])
  ]
})
export class AccountComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  recoverForm: FormGroup = new FormGroup({
    email_recover: new FormControl('', [Validators.email, Validators.required ]),
  });
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    cpf: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    phone: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    confirmPassword: new FormControl('', [ Validators.required ]),
  });
  check: boolean = false;
  hide: boolean = true;
  recover: boolean = false;
  registerView: boolean = false;
  teste: boolean = true;


  constructor(private snackBar: MatSnackBar, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', 'conta')
  }
  login() {
    if(this.loginForm.value.email === "" || this.loginForm.value.password === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      //implementar post no bando
    } catch (error) {
      this.snackBar.open("Email ou senha inválidos!", "dismiss",{duration: 3000})
    }
    this.loginForm.reset();
  }

  register(){
    if(this.check === false){
      this.snackBar.open("Aceite os termos de uso e política de privacidade!", "dismiss",{duration: 3000})
      return
    }
    if(this.registerForm.value.email === "" || this.registerForm.value.password === "" || this.registerForm.value.name === "" || this.registerForm.value.phone === "" || this.registerForm.value.confirmPassword === "" || this.registerForm.value.cpf === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.snackBar.open("Sua senhas não coincidem!", "dismiss",{duration: 3000})
      return
    }
    try {
      console.log(this.registerForm)
      // this.accountService.postUser(this.registerForm.value)
      this.snackBar.open("Cadastro efetuado com sucesso!", "dismiss",{duration: 3000})
      setTimeout(()=>{
        this.recover = false,
        this.registerView = false
      }, 1000);
    } catch (error) {
      this.snackBar.open("Impossível registrar sua conta", "dismiss",{duration: 3000})
    }
    this.registerForm.reset();
  }

  recoverPassword(){
    if(this.recoverForm.value.email_recover === "") {
      this.snackBar.open("Campos inválidos, preencha corretamente!", "dismiss",{duration: 3000})
      return
    }
    try {
      //Enviar email de recuparação
      this.snackBar.open("Um email de recuperação foi enviado para você!", "dismiss",{duration: 3000})
      setTimeout(()=>{
        this.recover = false,
        this.registerView = false
      }, 1000);
      return
    } catch (error) {
      this.snackBar.open("Email não encontrado!", "dismiss",{duration: 3000})
    }
    this.recoverForm.reset();
  }

  checkBox(event: any): void {
    this.check = event.checked;
  }

  toggleView1(value: boolean){
    this.recover = value;
  }

  toggleView2(value: boolean){
    this.registerView = value;
  }

}
