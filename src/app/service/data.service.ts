import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  state = new Map();
  private messageSource = new BehaviorSubject({
    firstName: '',
    lastName: '',
    MobileNumber: '',
    email: '',
  });
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message) {
    this.messageSource.next(message);
  }
  addToMap(formData) {
    this.state.set(formData, formData);
  }
  getState() {
    return this.state.values();
  }
}
