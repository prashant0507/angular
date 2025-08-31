import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPromiseEventToObservable } from './array-promise-event-to-observable';

describe('ArrayPromiseEventToObservable', () => {
  let component: ArrayPromiseEventToObservable;
  let fixture: ComponentFixture<ArrayPromiseEventToObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayPromiseEventToObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayPromiseEventToObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
