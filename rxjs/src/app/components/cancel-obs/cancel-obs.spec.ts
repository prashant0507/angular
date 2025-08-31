import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelObs } from './cancel-obs';

describe('CancelObs', () => {
  let component: CancelObs;
  let fixture: ComponentFixture<CancelObs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelObs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelObs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
