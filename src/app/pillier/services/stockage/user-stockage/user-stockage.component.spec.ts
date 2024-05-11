import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStockageComponent } from './user-stockage.component';

describe('UserStockageComponent', () => {
  let component: UserStockageComponent;
  let fixture: ComponentFixture<UserStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserStockageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
