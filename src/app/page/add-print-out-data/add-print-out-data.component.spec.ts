import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrintOutDataComponent } from './add-print-out-data.component';

describe('AddPrintOutDataComponent', () => {
  let component: AddPrintOutDataComponent;
  let fixture: ComponentFixture<AddPrintOutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrintOutDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrintOutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
