import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from '../Entity/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:Student = new Student();
  

  createStudent()
  {
    const observable=this.studenService.createStudent(this.student);
    observable.subscribe(
      (response:any) => {
      console.log(response)
      alert("Student added");
      },
      function(error){
        console.log(error);
        alert("Something went wrong");        
      })
  }

  

  constructor(private studenService:StudentService) { }

  ngOnInit(): void {

  
}
}
