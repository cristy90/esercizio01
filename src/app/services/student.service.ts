import { Injectable } from '@angular/core';
import { Student } from '../student';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';

const STUDENTS=[
  {
    id: 1,
    firstname: 'abou shady',
    lastname: 'mohamed',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 2,
    firstname: 'bertone',
    lastname: 'violetta',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 3,
    firstname: 'cappellino',
    lastname: 'stefania',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 4,
    firstname: 'cielo',
    lastname: 'natascia',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 5,
    firstname: 'cugusu',
    lastname: 'carolina',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 6,
    firstname: 'ena',
    lastname: 'noemi',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 7,
    firstname: 'fadda',
    lastname: 'consuelo',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 8,
    firstname: 'ferreira',
    lastname: 'matheus',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 9,
    firstname: 'la regina',
    lastname: 'alessandro',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 10,
    firstname: 'maganuco',
    lastname: 'sefora',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 11,
    firstname: 'melia',
    lastname: 'alessio',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 12,
    firstname: 'moro',
    lastname: 'luca',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 13,
    firstname: 'norelli',
    lastname: 'christian',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 14,
    firstname: 'ponzin',
    lastname: 'francesco',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  },
  {
    id: 15,
    firstname: 'ratti',
    lastname: 'cristina',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZHhXw5RTuBRtmSh0N1eDn_guXQaLiuXI8hIUWXs_7pbobxOcW&usqp=CAU',
  },
  {
    id: 16,
    firstname: 'tomatis',
    lastname: 'alberto',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUfbNhSk3dXiRja4zoP0x36x7FUjGGGkgk69uo5RJXpIM8uvsb&usqp=CAU',
  }

];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

// getStudents():Student[]{
//   return STUDENTS;
// }

getStudents(): Observable<Student[]>{
 return of (STUDENTS).pipe(delay(1000)); //delay simula la risposta del server dopo un certo tempo
}

}
