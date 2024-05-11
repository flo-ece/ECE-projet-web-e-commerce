import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseTabComponent } from './entreprise-tab.component';

describe('EntrepriseTabComponent', () => {
  let component: EntrepriseTabComponent;
  let fixture: ComponentFixture<EntrepriseTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrepriseTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrepriseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
