import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Array<Employee>;
  loading: boolean = true;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // mocking the time it takes for api to reply
    setTimeout(()=>{
      this.employeeService.getAllEmployees().subscribe((data)=> {
        this.employees = data;
        this.loading = false;
      })
    }, 1000);
  }
}
