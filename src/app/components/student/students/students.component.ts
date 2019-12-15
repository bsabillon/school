import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import {student} from '../../../models/student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students : any = [];




  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.dataService.getStudents().subscribe((student: student) => {
      this.dataService.student = student;
      this.students = student;
      console.log(this.students.payload);
    });
  }



}
