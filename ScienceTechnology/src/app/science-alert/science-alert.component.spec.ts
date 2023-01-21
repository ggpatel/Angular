import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceAlertComponent } from './science-alert.component';

describe('ScienceAlertComponent', () => {
  let component: ScienceAlertComponent;
  let fixture: ComponentFixture<ScienceAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
