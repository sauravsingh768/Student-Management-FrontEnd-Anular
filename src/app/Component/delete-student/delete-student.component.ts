import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

import { Student } from '../Entity/Student';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  students : Student[]=[];
  student: Student = new Student();

 
  delete(j)
  {

        const observable=this.studentService.
        deleteStudent(j);
        observable.subscribe((response:any)=>{
          console.log(response);
          this.students.splice(j,1);
          alert("student data deleted");
        });

        window.location.reload()

  }
  

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    

    

    const promise = this.studentService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[];
      
    })
  
  }

}
