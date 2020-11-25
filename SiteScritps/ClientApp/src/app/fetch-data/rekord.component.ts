import { Component, Output,Input, EventEmitter } from '@angular/core';
import { Student } from '../../services/studenciaki.service';
import { StudenciakiService } from '../../services/studenciaki.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { trigger, style, state, transition, animate, group } from '@angular/animations'


@Component({
  selector: 'app-rekord',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    //trigger('welcomeOut', [
    //  transition('* => void', [
    //    style({ transform: 'translateX(100%)' }),
    //    animate('1s')
    //  ]),
    //]),
  ],
  templateUrl: './rekord.component.html'
})
export class RekordComponent {
  @Input('dane') public student: Student;
  
 @Output() public usuniecie = new EventEmitter<number>();

  public usun(): void {
   this.usuniecie.emit(this.student.studentId);
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
