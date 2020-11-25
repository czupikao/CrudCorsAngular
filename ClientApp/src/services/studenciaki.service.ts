import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


//Konfiracja wstrzykiwania (Dependecy Injection) wykorzystana w konstruktorze FetchDataComponent
@Injectable({
  providedIn: 'root'
})
export class StudenciakiService {


  //niedostępne w C# utworzenie w klasie pola zaincjowanego parametrem konstruktora
  constructor(private http: HttpClient) { }

  public GetStudents(): Observable<Student[]> {
    // nie zwracamy danych a tylko obiekt obserwowany, który w chwili asynchronicznego wykonania operacji
    // zwróci tablicę studentów
    return this.http.get<Student[]>('https://localhost:44318/api/Studenci');
  }


  public DeleteStudent(id: number): Observable<Student> {

    //Wywołnie metody DeleteStudent(int id) z kontrolera WebApi, żądanie HTTP typu DELETE
    return this.http.delete<Student>('https://localhost:44318/api/Studenci/' + id);
  }

  public AddStudent(nowyStudent: Student): Observable<Student> {
    //Wywołnie metody  PostStudent(Student student) z kontrolera WebApi, żądanie HTTP typu POST
    return this.http.post<Student>('https://localhost:44318/api/Studenci', nowyStudent);
  }
}

//klasa jest używana do tworzenia obiektów, w przeciwieństwie do interfejsu
export class Student {
  studentId: number;
  imie: string;
  nazwisko: string;
  pesel: string;
}
