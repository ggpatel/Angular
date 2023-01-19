import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerviewComponent } from './computerview.component';

describe('ComputerviewComponent', () => {
  let component: ComputerviewComponent;
  let fixture: ComponentFixture<ComputerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
