import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentsComponent } from '../components/student/students/students.component';
import {student} from '../models/student';
import {teacher} from '../models/teacher';
import {course} from '../models/course';
import {section} from '../models/section';
import {subject} from '../models/subject';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 public student: student;
 public teacher: teacher;
 public course: course;
 public section: section;
 public subject: subject;


  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'http://localhost:5000/api';


  constructor(private http: HttpClient, public router: Router) { }

    getStudents() {
      return this.http.get(`${this.endpoint}/student`);
    }




}
