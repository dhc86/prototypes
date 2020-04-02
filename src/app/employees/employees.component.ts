import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Observable, interval, Subject } from 'rxjs';
import { tap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Array<Employee>;
  loading: boolean = true;

  public employee$: Observable<Employee> = this.employeeService.getAllEmployees();
  public number$: Observable<any> = interval(1000);
  public destroy$: Subject<any> = new Subject();

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {

    //  Subjects
    this.destroy$.subscribe((data)=> console.log('%c 1st subject subcriber: ', 'background: yellow; color: black', data))
    this.destroy$.subscribe((data)=> console.log('%c 2nd subject subcriber: ', 'background: orange; color: black', data))
    this.destroy$.next('something cool!')
    this.destroy$.next('something once more!!')



    // Observables:
    // this.employee$.subscribe((data)=> console.log('1st subscriber:', data));

    this.employee$
      .pipe(
        tap((data)=> console.log('%c from tap: ============', 'background: blue', data)),
        map((empl: Employee)=> {
          empl.name = 'Diego';
          return empl;
        })
      )
      .subscribe((data)=> console.log('%c from second subscriber" ', 'background: red', data))
    // this.numbers$
    // .pipe(tap((number)=> console.log(number)))
    // .subscribe((value)=> console.log('recieved value: ', value))
  }




  // ngOnInit(): void {
    // mocking the time it takes for api to reply
    // setTimeout(()=>{
    //   this.employeeService.getAllEmployees().subscribe((data)=> {
    //     this.employees = data;
    //     this.loading = false;
    //   })
    // }, 1000);
  // }
}
