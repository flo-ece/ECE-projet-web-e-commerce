import { Component } from '@angular/core';
import { UserStockageComponent } from './pillier/services/stockage/user-stockage/user-stockage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerceEce';

  /*isClientLogIn : boolean = UserStockageComponent.isClientLogIn();
  isCompanyLogIn : boolean = UserStockageComponent.isCompanyLogIn();

  constructor (private router : Router){}

  ngOnInit() {
    this.router.events.subscribe(event =>{
      this.isClientLogIn = UserStockageComponent.isClientLogIn();
      this.isCompanyLogIn = UserStockageComponent.isCompanyLogIn();
    })
  }

  logout() {
    UserStockageComponent.signOut();
    this.router.navigateByUrl('login');
  }*/
}
