import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  StudentList: any = [];
  ModalTitle = "";
  ActivateAddEditStuComp: boolean = false;
  stud: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.stud = {
      StudentId: "0",
      StudentName: "",
      Course: "",
      Specialization: "",
      Percentage: "0.0",
      DepartmentId: "0"
    }
    this.ModalTitle = "Add Student";
    this.ActivateAddEditStuComp = true;
  }

  editClick(item: any) {
    this.stud = item;
    this.ModalTitle = "Edit Student";
    this.ActivateAddEditStuComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteStudent(item.StudentId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditStuComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getStudentList().subscribe(data => {
      this.StudentList = data;
    });
  }
}