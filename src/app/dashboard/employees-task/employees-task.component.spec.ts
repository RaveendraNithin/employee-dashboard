import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTaskComponent } from './employees-task.component';

describe('EmployeesTaskComponent', () => {
  let component: EmployeesTaskComponent;
  let fixture: ComponentFixture<EmployeesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
