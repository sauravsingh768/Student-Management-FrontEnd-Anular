import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from '../Entity/Student';

@Component({
  selector: 'app-get-student-by-class',
  templateUrl: './get-student-by-class.component.html',
  styleUrls: ['./get-student-by-class.component.css']
})
export class GetStudentByClassComponent implements OnInit {

  
  students:Student []= [];
  student: Student = new Student();
  clno:number;

  

  getStudentByClass(classNo) {
    
    console.log(classNo);

    
      
    this.studentService.getStudentByClass(classNo).
    subscribe((response) => {
      console.log(response);
      this.students = response as Student[];
    }); 
  }

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

}
