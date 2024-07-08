import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {SelectValue} from "../Models/selectValue";

@Injectable({
  providedIn: 'root'
})
export class RepaymentPeriodService {

  constructor() {
  }

  getRepaymentPeriods(): Observable<SelectValue[]> {
    return of([
      {id: 15, name: '15 years'},
      {id: 20, name: '20 years'},
      {id: 25, name: '25 years'},
      {id: 30, name: '30 years'},
      {id: 35, name: '35 years'}]);
  }
}
