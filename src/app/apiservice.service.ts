import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly baseUrl = 'https://localhost:7228/api/';

  constructor(private http: HttpClient) { }

  // Department
  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'Departments');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseUrl + 'Departments', dept, httpOptions);
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'Departments/'+ dept.DepartmentId, dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.baseUrl + 'Departments/' + deptId, httpOptions);
  }

  // Student
  getStudentList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'Students');
  }

  addStudent(stud: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseUrl + 'Students', stud, httpOptions);
  }

  updateStudent(stud: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'Students/'+ stud.StudentId, stud, httpOptions);
  }

  deleteStudent(studId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.baseUrl + 'Students/' + studId, httpOptions);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'Students/GetAllDepartmentNames');
  }
}