import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirective } from './structural-directive';

describe('StructuralDirective', () => {
  let component: StructuralDirective;
  let fixture: ComponentFixture<StructuralDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
