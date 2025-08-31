import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionVsObservable } from './function-vs-observable';

describe('FunctionVsObservable', () => {
  let component: FunctionVsObservable;
  let fixture: ComponentFixture<FunctionVsObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionVsObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionVsObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
