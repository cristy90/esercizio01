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
students:Student[];
showloading:boolean=false;
 
  constructor(private studentService  : StudentService ) { }

  ngOnInit(): void {
    this.showloading=true;
    //chiamo il servizio.il metodo del servizio.mi sovvrascrivo al'observabole(funzione)
    //this.studentService.getStudents().subscribe(function(response ){this.students = response});
    this.studentService.getStudents().subscribe(response =>{
      this.showloading=false;
      this.students = response
    });
  }
  selectThisStudent(dati:Student){
    this.studentService.selectedStudent=dati;
  }
}
