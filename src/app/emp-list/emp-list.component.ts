import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  empData: any;
  isEmpData: boolean;

  constructor(public data: DataService) { }

  ngOnInit() {
    this.empData = Array.from(this.data.getState());
    if (this.empData.length === 0) {
      this.isEmpData = false;
    } else {
      this.isEmpData = true;
    }
  }

}
