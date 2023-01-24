import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchAlertComponent } from './reserch-alert.component';

describe('ReserchAlertComponent', () => {
  let component: ReserchAlertComponent;
  let fixture: ComponentFixture<ReserchAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserchAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
