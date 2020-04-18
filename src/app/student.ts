export interface Student{
    id: number; 
    firstname: string;
    lastname:string;
    imgUrl?:string; //?= opzionale se non tutti gli studenti hanno un url img non succede errore poichè l'ho reso opzionale.
}