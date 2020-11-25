import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { StudenciakiService } from '../../services/studenciaki.service';
import { Student } from '../../services/studenciaki.service';
import { FormsModule } from '@angular/forms';
import { RekordComponent } from './rekord.component';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  animations: [
    trigger('welcomeOut', [
      transition('* => void', [
        /*style({ transform: 'translateX(100%)' })*/,
        animate('3s', style({ transform: 'translateX(100%)' }))
      ]),
    ]),
  ]
})
export class FetchDataComponent {

  public studenci: Student[];

  //niedostępne w C# utworzenie w klasie pola zaincjowanego parametrem konstruktora
  //obiekt klasy StudenciService jest wstrzykiawany (Dependency Injection)
  constructor(private studenciakiService: StudenciakiService) {
    this.PobierzStudentow();
  }

  public PobierzStudentow() {
    console.log("Rozpoczęcie pobierania tabeli");
    this.studenciakiService.GetStudents().subscribe(result => {
      this.studenci = result;  // zostanie wykone po asynchronicznym nadejściu danych
    }, error => console.error(error));
  }

  public Usun(id: number) {
    console.log("Rozpoczęcie usuwania studenta:" + id); //operacja pomocnicza, która jest widoczna na zakładce Konsola przeglądarki interentowej (F12)

    this.studenciakiService.DeleteStudent(id).subscribe(result => {
      this.PobierzStudentow();  // metoda zostanie wykonana asynchronicznie po usunięciu
    }
    );
  }

  public txtImie: string;
  public txtNazwisko: string;
  public txtPesel: string;

  public DodajStudenta() {
    console.log("Rozpoczęcie dodawania studenta"); //operacja pomocnicza, która jest widoczna na zakładce Konsola przeglądarki interentowej (F12)

    let nowy: Student = new Student(); //ponieważ chcemy tworzyć obiekty, Student nie jest już interfejsem a klasą
    nowy.imie = this.txtImie;
    nowy.nazwisko = this.txtNazwisko;
    nowy.pesel = this.txtPesel;
    this.studenciakiService.AddStudent(nowy).subscribe(r => {
      this.PobierzStudentow();  // metoda zostanie wykonana asynchronicznie po usunięciu
    });
  }
  isWelcome = true;

}
