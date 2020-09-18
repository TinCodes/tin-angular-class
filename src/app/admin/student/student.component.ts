import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../shared/services/student.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { LessPrimary, LessSecondary} from '../store/admin.actions';

@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
	
	students = [];
	primary = [];
	secondary = [];

	studentForm: FormGroup;

  studentGetSub: Subscription;
  studentDelSub: Subscription;

  editId : any;

	@Input() student: any;
	@Output() formForSide = new EventEmitter();

	constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private authService: AuthService,
              private store: Store<any>) {
		this.loadStudents();
	}

	ngOnInit(): void {
		this.studentForm = this.formBuilder.group({
      name: '',
      age: '',
      grade: '',
      urlImage: ''
    });
	}

	loadStudents() : void {
    this.students = [];
    this.primary = [];
    this.secondary = [];
    const idUser = this.authService.getUserId();
    this.studentGetSub = this.studentService.getStudentById(idUser).subscribe(res => {

      Object.entries(res).map((p: any) => this.students.push({id: p[0], ...p[1]}));
    });
  }

	onEdit(student) : void {
    console.log("Student: ", student);

    this.editId = student.id;
    this.studentForm.patchValue({
      name: student.name,
      age: student.age,
      grade: student.grade,
      urlImage: student.urlImage
    });
    this.formForSide.emit(student);
  }

  onDelete(id: any) : void {
    this.studentDelSub = this.studentService.deleteStudent(id).subscribe(res => {
      console.log("DELETE Response: ", res);
      if (res.grade === "P") {
      	this.store.dispatch(LessPrimary({primary: this.primary.length}))
      } else if (res.grade === "S") {
      	this.store.dispatch(LessSecondary({secondary: this.secondary.length}))
      }
      this.loadStudents();
      window.location.reload();
    },
    err => {
      console.log("DELETE Error: ", err)
    });
  }

}