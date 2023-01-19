import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyViewComponent } from './studyview.component';

describe('StudyviewComponent', () => {
  let component: StudyViewComponent;
  let fixture: ComponentFixture<StudyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
