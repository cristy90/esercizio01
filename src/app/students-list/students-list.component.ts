import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
title:string='lista studenti';
students:Student[]=[];
 
  constructor(private studentService  : StudentService ) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
