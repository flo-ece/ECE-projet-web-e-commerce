import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAccueilComponent } from './entreprise-accueil.component';

describe('EntrepriseAccueilComponent', () => {
  let component: EntrepriseAccueilComponent;
  let fixture: ComponentFixture<EntrepriseAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrepriseAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrepriseAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
