import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/Addstudent/student.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { GetallstudentComponent } from './Component/getallstudent/getallstudent.component';
import { DeleteStudentComponent } from './Component/delete-student/delete-student.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';
import { GetStudentByIdComponent } from './Component/get-student-by-id/get-student-by-id.component';
import { GetStudentByClassComponent } from './Component/get-student-by-class/get-student-by-class.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    GetallstudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    GetStudentByIdComponent,
    GetStudentByClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
