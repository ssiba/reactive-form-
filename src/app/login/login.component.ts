import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm:FormGroup;
  submitted = false;
  dataMessage:string;
userDetails:any;
  constructor(public fb:FormBuilder,
    public router:Router
    ) {
      setInterval(()=>{
 let currentDate=new Date();
 this.dataMessage=currentDate.toDateString() + '' + currentDate.toLocaleTimeString();
      },1000)
     }

  ngOnInit() {
    //set and get item from local storage
  //  let setItem=localStorage.setItem('siba', 'hello');
  // let user=JSON.stringify(localStorage.getItem('siba'));
  // console.log(user)

  //how to get object 
 let object=localStorage.setItem('currentuser', JSON.stringify('iabctem'));
//  console.log(object)
 let  obj=JSON.parse(localStorage.getItem('currentuser'));
console.log(obj)
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
      this.router.navigate(['/curd'])
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      alert("Form is Invalid")
    }
  }

}
