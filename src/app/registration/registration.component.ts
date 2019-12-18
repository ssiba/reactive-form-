import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './validator'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  result: any;

  constructor(private fb: FormBuilder,
    public router: Router,
    public data: DataService,
    ) { }

  ngOnInit() {
    
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      MobileNumber:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });

  }
  get f() { return this.registerForm.controls; }
  // onSubmit() {
  //   this.submitted = true;
  //   // this.result=(this.registerForm.value)
  //   console.log(this.registerForm.value)
  //   // this.result=(this.registerForm.value)
  // }
  clearForm() {
    this.registerForm.reset();
  }

  saveReg() {
    // console.log(this.registerForm.value);
    // this.submitted = true;
  //  this.result = console.log(this.registerForm.value)
    // this.result = this.registerForm.value
    console.log(this.registerForm.value);
    this.submitted = true;
    if (this.registerForm.valid) {
      this.data.addToMap(this.registerForm.value);
      Swal.fire({
        title: 'Data has been saved successfuly',
        text: 'Click on info button to check the data',
        // type: 'success',
        confirmButtonText: 'info',
        cancelButtonText: 'stay',
        showCancelButton: true,
        showCloseButton: true,
      }
      ).then(res => {
        if (res.dismiss) {
          this.registerForm.reset();
        } else if (res.value) {
          this.router.navigateByUrl('/emp-list');
        }
      });
    } else {
      console.log('form is invaild');
    }

  }
  
  
}
