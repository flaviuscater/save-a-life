import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalInputFormComponent } from './hospital-input-form.component';

describe('HospitalInputFormComponent', () => {
  let component: HospitalInputFormComponent;
  let fixture: ComponentFixture<HospitalInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
