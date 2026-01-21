import { Component } from "@angular/core";
import { AddStudent } from "./add-student/add-student";
import { NgClass } from "@angular/common";

export interface IStudent {
  name: string,
  score: number,
  id: string
}

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.html",
  imports: [AddStudent, NgClass]
})

export class StudentList {
  students: IStudent[] = [];

  addStudent(studentData: IStudent) {
    this.students.unshift(studentData);
  }

  removeStudent(id: string) {
    this.students = this.students.filter((s) => s.id !== id)
  }
}