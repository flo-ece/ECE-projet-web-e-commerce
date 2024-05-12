import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAnnoncesComponent } from './entreprise-annonces.component';

describe('EntrepriseAnnoncesComponent', () => {
  let component: EntrepriseAnnoncesComponent;
  let fixture: ComponentFixture<EntrepriseAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrepriseAnnoncesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrepriseAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
