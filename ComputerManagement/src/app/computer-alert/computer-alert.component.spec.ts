import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerAlertComponent } from './computer-alert.component';

describe('ComputerAlertComponent', () => {
  let component: ComputerAlertComponent;
  let fixture: ComponentFixture<ComputerAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
