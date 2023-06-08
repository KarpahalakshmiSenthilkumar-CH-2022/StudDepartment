import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input() stud: any;
  StudentId = "";
  StudentName = "";
  Course = "";
  Specialization = "";
  Percentage = "";
  DepartmentId = "";
  DepartmentList: any = [];


  ngOnInit(): void {
    this.StudentId = this.stud.StudentId;
    this.StudentName = this.stud.StudentName;
    this.Course = this.stud.Course;
    this.Specialization = this.stud.Specialization;
    this.Percentage = this.stud.Percentage;
    this.DepartmentId = this.stud.DepartmentId;
  }

  addStudent() {
    var val = {
      StudentId: this.StudentId,
      StudentName: this.StudentName,
      Course: this.Course,
      Specialization: this.Specialization,
      Percentage: this.Percentage,
      DepartmentId: this.DepartmentId
    };

    this.service.addStudent(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateStudent() {
    var val = {
      StudentId: this.StudentId,
      StudentName: this.StudentName,
      Course: this.Course,
      Specialization: this.Specialization,
      Percentage: this.Percentage,
      DepartmentId: this.DepartmentId
    };

    this.service.updateStudent(val).subscribe(res => {
      alert(res.toString());
    });
  }
}