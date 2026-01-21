import { Component, EventEmitter, Output } from '@angular/core';
import { IStudent } from '../student-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.html",
  imports: [FormsModule]
})
export class AddStudent {
  name: string = '';
  score: number = 0;
  id: string = Date.now().toString();

  @Output() addStudent = new EventEmitter<IStudent>();

  add() {
    if (this.name.trim().length < 3) {
      alert('Name required');
      return;
    }
    this.addStudent.emit({ id: this.id, name: this.name, score: this.score })
    this.name = '';
    this.score = 0;
    this.id = Date.now().toString()
  }
}