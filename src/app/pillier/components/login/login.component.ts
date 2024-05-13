import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthentificationComponent } from '../../services/authentification/authentification/authentification.component';
import { UserStockageComponent } from '../../services/stockage/user-stockage/user-stockage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthentificationComponent,
    private notification: NzNotificationService,
    private router: Router,
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      username : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }

  submitForm(){
    this.authService.login(this.validateForm.get(['username'])!.value,
    this.validateForm.get(['password'])!.value).subscribe(res =>{
      console.log(res);
      if (UserStockageComponent.isClientLogIn){
        this.router.navigateByUrl('client/accueil')
        console.log("coucou j'existe!!")
      } else if (UserStockageComponent.isCompanyLogIn){
        this.router.navigateByUrl('entreprise/accueil')
        console.log("coucou j'existe!!")
      }
    }, error =>{
      this.notification.error('ERREUR', 'Erreur', {nzDuration: 5000}

      )
    })
  }
}

