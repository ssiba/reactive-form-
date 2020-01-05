import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm:FormGroup;
  submitted = false;


  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.logForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  get f() { return this.logForm.controls; }

  saveReg(){
    console.log(this.logForm.value);
    this.submitted=true;
    if(this.logForm.valid){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      console.log("Form is Invalid")
    }
  }

}
