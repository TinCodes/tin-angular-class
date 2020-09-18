import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StudentService } from '../../shared/services/student.service';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { AddPrimary, AddSecondary } from '../store/admin.actions';


@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

	@Input() theForm: any;

	students = [];
  primary = [];
  secondary = [];

	studentForm: FormGroup;
	studentSub: Subscription;
	studentGetSub: Subscription;
	studentPutSub: Subscription;
	studentDelSub: Subscription;

	editId : any;

	constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private authService: AuthService,
              private store: Store) {
		this.loadStudents();
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

  onCreate(): void {   
    this.studentSub = this.studentService.addStudent({
      ...this.studentForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('POST Response: ', res);
        if (res.grade === "P") {
          this.store.dispatch(AddPrimary({primary: this.primary.length}))
        } else if (res.grade === "S") {
          this.store.dispatch(AddSecondary({secondary: this.secondary.length}))
        }
        this.loadStudents();
        window.location.reload();
      },
      err => {
        console.log("SERVER ERROR: ", err);
      }
    );
  }

  onUpdate() : void {
    this.studentPutSub = this.studentService.updateStudent(this.editId, {
      ...this.studentForm.value,
      id: this.authService.getUserId()
    }).subscribe(res => {
      console.log("UPDATE Response: ", res);
      this.loadStudents();
      window.location.reload();
    },
    err => {
      console.log("UPDATE Error: ", err)
    });
  }

	ngOnInit(): void {
		this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: '',
      grade: ['', [Validators.required]],
      urlImage: ''
    });
	}

	ngOnChanges() {
    this.studentForm ? this.studentForm.patchValue(this.theForm) : '';
	}

}