import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAlertComponent } from './study-alert.component';

describe('StudyAlertComponent', () => {
  let component: StudyAlertComponent;
  let fixture: ComponentFixture<StudyAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
