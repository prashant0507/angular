import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObservable } from './new-observable';

describe('NewObservable', () => {
  let component: NewObservable;
  let fixture: ComponentFixture<NewObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
