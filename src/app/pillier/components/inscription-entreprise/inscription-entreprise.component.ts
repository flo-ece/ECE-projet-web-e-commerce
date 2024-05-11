import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthentificationComponent } from '../../services/authentification/authentification/authentification.component';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrl: './inscription-entreprise.component.scss'
})
export class InscriptionEntrepriseComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthentificationComponent, 
    private notification: NzNotificationService, 
    private router: Router){}

    ngOnInit(){
      this.validateForm = this.fb.group({
        email : [null, [Validators.email, Validators.required]],
        name : [null, [Validators.required]],
        address : [null, [Validators.required]],
        phone : [null],
        password : [null, [Validators.required]],
        validate_password : [null, [Validators.required]],
      })
    }
      submitForm(){
        this.authService.registerCompany(this.validateForm.value).subscribe(res =>{
          this.notification.success('SUCCES', 'Inscription réussie',
            {nzDuration: 5000}
          );
          this.router.navigateByUrl('/login');
        }, error =>{
          this.notification.success('ERREUR', `${error.error}`,
            {nzDuration: 5000}
          )
        });
      }
}
