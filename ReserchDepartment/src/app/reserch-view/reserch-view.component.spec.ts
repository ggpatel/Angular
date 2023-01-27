import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchViewComponent } from './reserch-view.component';

describe('ReserchViewComponent', () => {
  let component: ReserchViewComponent;
  let fixture: ComponentFixture<ReserchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
