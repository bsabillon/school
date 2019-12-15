import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { StudentsComponent } from './components/student/students/students.component';
import { CoursesComponent } from './components/course/courses/courses.component';
import { SectionsComponent } from './components/section/sections/sections.component';
import { SubjectsComponent } from './components/subject/subjects/subjects.component';
import { TeachersComponent } from './components/teacher/teachers/teachers.component';
import { AddStudentComponent } from './components/student/addStudent/addStudent.component';
import {AddTeacherComponent} from "./components/teacher/addTeacher/addTeacher.component";
import {AddCourseComponent} from "./components/course/addCourse/addCourse.component";
import {AddRegistrationComponent} from "./components/registration/addRegistration/addRegistration.component";
import {AddSectionComponent} from "./components/section/addSection/addSection.component";
import {AddSubjectComponent} from "./components/subject/addSubject/addSubject.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AddStudentComponent, AddTeacherComponent, AddCourseComponent, AddRegistrationComponent,
    AddSectionComponent,AddSubjectComponent,
    StudentsComponent,
    CoursesComponent,
    SectionsComponent,
    SubjectsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatCardModule,MatFormFieldModule,MatIconModule,
    MatInputModule,MatButtonModule,MatListModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
