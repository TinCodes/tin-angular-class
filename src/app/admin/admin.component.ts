import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../shared/services/student.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  students = [];
  searchStudents = [];
  primary = [];
  secondary = [];
  theForm: any;
  query: string;
	studentForm: FormGroup;

  studentSub: Subscription;
  studentSearchSub: Subscription;
  studentGetSub: Subscription;
  studentPutSub: Subscription;
  studentDelSub: Subscription;

  editId : any;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private authService: AuthService) {
    this.loadStudents();
  }

  loadStudents() : void {
    this.students = [];
    const idUser = this.authService.getUserId();
    this.studentGetSub = this.studentService.getStudents().subscribe(res => {
      Object.entries(res).map((p: any) => this.students.push({id: p[0], ...p[1]}));
      this.primary = this.students.filter(s => s.grade === "P"); 
      this.secondary = this.students.filter(s => s.grade === "S"); 
    });
  }

  onSearch() {
    if (this.query) {
      this.primary = this.primary.filter(s => s.name.includes(this.query.toLowerCase()));
      this.secondary = this.secondary.filter(s => s.name.includes(this.query.toLowerCase()));
    } else {
      this.loadStudents()
    }
  }

  onCreate(): void {   
    this.studentSub = this.studentService.addStudent({
      ...this.studentForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('POST Response: ', res);
        this.loadStudents();
      },
      err => {
        console.log("SERVER ERROR: ", err);
      }
    );
  }

  onEdit(student) : void {
    console.log("Current Product: ", student);

    this.editId = student.id;
    this.studentForm.patchValue({
      title: student.title,
      description: student.description,
      imageUrl: student.imageUrl,
      ownerId: student.ownerId,
      price: student.price
    });
  }

  onUpdate() : void {
    this.studentPutSub = this.studentService.updateStudent(this.editId, {
      ...this.studentForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(res => {
      console.log("UPDATE Response: ", res);
      this.loadStudents();
    },
    err => {
      console.log("UPDATE Error: ", err)
    });
  }

  onDelete(id: any) : void {
    // console.log("Item ID: ", id);
    this.studentDelSub = this.studentService.deleteStudent(id).subscribe(res => {
      console.log("DELETE Response: ", res);
      this.loadStudents();
    },
    err => {
      console.log("DELETE Error: ", err)
    });
  }

  onGetForm(form){
    this.studentForm.patchValue(form);
    this.theForm = form;
    console.log("admin:",this.theForm)
  }

  ngOnInit(): void {
  	this.studentForm = this.formBuilder.group({
      name: '',
      age: '',
      grade: '',
      urlImage: ''
    });
  }

  ngOnDestroy(): void {
    this.studentSub ? this.studentSub.unsubscribe() : '';
    this.studentGetSub ? this.studentGetSub.unsubscribe() : '';
    this.studentDelSub ? this.studentDelSub.unsubscribe() : '';
    this.studentPutSub ? this.studentPutSub.unsubscribe() : '';
    this.studentSearchSub ? this.studentSearchSub.unsubscribe() : '';
  }

}