import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationComponent } from '../../services/authentification/authentification/authentification.component'
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrl: './inscription-client.component.scss'
})
export class InscriptionClientComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthentificationComponent, 
    private notification: NzNotificationService, 
    private router: Router){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      email : [null, [Validators.email, Validators.required]],
      first_name : [null, [Validators.required]],
      last_name : [null, [Validators.required]],
      phone : [null],
      password : [null, [Validators.required]],
      validate_password : [null, [Validators.required]],
    })
  }
  submitForm(){
    this.authService.registerClient(this.validateForm.value).subscribe(res =>{
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
