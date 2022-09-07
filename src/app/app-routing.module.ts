import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Component/Addstudent/student.component';
import { GetallstudentComponent } from './Component/getallstudent/getallstudent.component';
import { GetStudentByIdComponent } from './Component/get-student-by-id/get-student-by-id.component';
import { GetStudentByClassComponent } from './Component/get-student-by-class/get-student-by-class.component';
import { DeleteStudentComponent } from './Component/delete-student/delete-student.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';

const routes: Routes = [
  {path:"student", component:StudentComponent },
  {path:"getallstudent", component:GetallstudentComponent },
  {path:"getallstudentbyid", component:GetStudentByIdComponent },
  {path:"getstudentbyclass", component:GetStudentByClassComponent },
  {path:"deletestudent", component:DeleteStudentComponent },
  {path:"updatestudent", component:UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
