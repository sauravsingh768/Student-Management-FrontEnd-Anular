import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from '../Entity/Student';

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.css']
})
export class GetallstudentComponent implements OnInit {

  students : Student[]=[];
  

  constructor(private studenService:StudentService) { }

  ngOnInit(): void {

    const promise = this.studenService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[];
      console.log(this.students);
      
    })
  }

}
