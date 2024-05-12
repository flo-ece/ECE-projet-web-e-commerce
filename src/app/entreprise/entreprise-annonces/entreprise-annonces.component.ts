import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EntrepriseService } from '../services/entreprise.service';
import { read } from 'fs';

@Component({
  selector: 'app-entreprise-annonces',
  templateUrl: './entreprise-annonces.component.html',
  styleUrl: './entreprise-annonces.component.scss'
})
export class EntrepriseAnnoncesComponent {

  selectedFile : File | null;
  imagePreview : string | ArrayBuffer | null;
  validateForm! : FormGroup;

  constructor(private fb : FormBuilder, private notification : NzNotificationService,
    private router : Router,
    private entrepriseService : EntrepriseService){}

    ngOnInit(){
      this.validateForm = this.fb.group({
        serviceName : [null, [Validators.required]],
        description : [null, [Validators.required]],
        price : [null, [Validators.required]],
      })
    }
  
    onFileSelected(envent:any){
      this.selectedFile = envent.target.files[0];
      this.previewImage();
    }

    previewImage(){
      const reader = new FileReader();
      reader.onload = () =>{
        this.imagePreview = reader.result;
      }
      reader.readAsDataURL(this.selectedFile);
    }

    postAd(){
      const formData : FormData = new FormData();
      formData.append('img', this.selectedFile);
      formData.append('serviceName', this.validateForm.get('serviceName').value);
      formData.append('description', this.validateForm.get('description').value);
      formData.append('price', this.validateForm.get('price').value);
      this.entrepriseService.postAd(formData).subscribe(res =>{
        this.notification.success(
          'SUCCES', 'Annonce posté réussie', {nzDuration: 5000}
        );
        this.router.navigateByUrl('/entreprise/entreprise-annonces');
      }, error =>{
        this.notification.error(
          'ERREUR', `${error.error}`, {nzDuration: 5000}
        )
      })
    }
}
