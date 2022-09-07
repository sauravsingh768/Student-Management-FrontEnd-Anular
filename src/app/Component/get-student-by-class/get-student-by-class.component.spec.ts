import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentByClassComponent } from './get-student-by-class.component';

describe('GetStudentByClassComponent', () => {
  let component: GetStudentByClassComponent;
  let fixture: ComponentFixture<GetStudentByClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStudentByClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudentByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
