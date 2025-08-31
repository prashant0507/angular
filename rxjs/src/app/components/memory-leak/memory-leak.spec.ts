import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeak } from './memory-leak';

describe('MemoryLeak', () => {
  let component: MemoryLeak;
  let fixture: ComponentFixture<MemoryLeak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryLeak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryLeak);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
