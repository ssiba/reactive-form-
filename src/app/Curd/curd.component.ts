import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {
  newEmployeeClicked: boolean = false;

  employees = [
    { name: 'Arul', position: 'Software Developer'},
    { name: 'Permul', position: 'Team Lead'},
    { name: 'Siba', position: 'Developer'}
  ];

  constructor() { }

  ngOnInit() {
  }
  color;
  model: any = {};
  model2: any = {}; 
  addEmployee() {
    if(this.model.name && this.model.position )
    this.employees.push(this.model);
    this.model = {};
  }
  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }
  myValue;
  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }
  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }

  addNewEmployeeBtn() {
    if(this.newEmployeeClicked){
      this.newEmployeeClicked = false;
    }else{
      this.newEmployeeClicked = true;
    }
  }

  changeColorOne() {
     return '#f6f6f6';
     this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
     return '#f6f6f6';
    }
 }

}
