import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Student } from './Component/Entity/Student';


const BASE_URL_FOR_CREATING_STUDENT = "http://localhost:8087/student";
const BASE_URL_FOR_ALL_STUDENT="http://localhost:8087/student";
const BASE_URL_DELETE_STUDENT="http://localhost:8087/student/"
const BASE_URL_FOR_UPDATE_STUDENT="http://localhost:8087/updateStudentById/"
const BASE_URL_TO_EARCH_STUDENT_BY_ID="http://localhost:8087/getStudentbyid/";
const BASE_URL_TO_SEARCH_STUDENT_BY_CLASS="http://localhost:8087/getStudentbyclass/";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudentByClass(classNo)
  {
    return this.http.get(BASE_URL_TO_SEARCH_STUDENT_BY_CLASS+classNo);
  }

  createStudent(student:{sid:number;name:string;classNo:number;dob:string})
  {   
    return this.http.post(BASE_URL_FOR_CREATING_STUDENT,student);
  }

getStudents()
{
  return this.http.get(BASE_URL_FOR_ALL_STUDENT);
}



deleteStudent(sid)
{
  return this.http.delete(BASE_URL_DELETE_STUDENT+sid);
}

updateStudent(st,id)
{
 return this.http.put(BASE_URL_FOR_UPDATE_STUDENT+id,st);
}

getStudentById(id)
{
  return this.http.get(BASE_URL_TO_EARCH_STUDENT_BY_ID+id);
}



  constructor(private http:HttpClient) { }
}
