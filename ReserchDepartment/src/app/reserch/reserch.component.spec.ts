import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchComponent } from './reserch.component';

describe('ReserchComponent', () => {
  let component: ReserchComponent;
  let fixture: ComponentFixture<ReserchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReserchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
