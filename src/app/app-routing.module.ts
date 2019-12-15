import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddStudentComponent} from "./components/student/addStudent/addStudent.component";
import {AddTeacherComponent} from "./components/teacher/addTeacher/addTeacher.component";
import {AddCourseComponent} from "./components/course/addCourse/addCourse.component";
import {AddRegistrationComponent} from "./components/registration/addRegistration/addRegistration.component";
import {AddSectionComponent} from "./components/section/addSection/addSection.component";
import {AddSubjectComponent} from "./components/subject/addSubject/addSubject.component";
import {StudentsComponent} from "./components/student/students/students.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/add', component: AddStudentComponent },
  { path: 'teacher/add', component: AddTeacherComponent },
  { path: 'course/add', component: AddCourseComponent },
  { path: 'section/add', component: AddSectionComponent },
  { path: 'subject/add', component: AddSubjectComponent },
  { path: 'registration/add', component: AddRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
