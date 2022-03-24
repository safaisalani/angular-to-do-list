import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreciptComponent } from './printrecipt.component';

describe('PrintreciptComponent', () => {
  let component: PrintreciptComponent;
  let fixture: ComponentFixture<PrintreciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintreciptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
