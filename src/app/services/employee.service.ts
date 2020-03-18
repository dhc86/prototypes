import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Array<any> = [
    { id: '1', name: 'Diego', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street ', department: 'unit', title: '10' },
		{ id: '2', name: 'Anna', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'weight', title: '10' },
		{ id: '3', name: 'Ramy', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'weight', title: '10' },
		{ id: '4', name: 'Sam', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '5', name: 'Clude', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '6', name: 'Martin', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '7', name: 'Clark', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'weight', title: '10' },
		{ id: '8', name: 'Maria', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'weight', title: '10' },
		{ id: '9', name: 'Dany', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '10', name: 'Carlos', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '11', name: 'Inani', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' },
		{ id: '12', name: 'Randy', startDate: '2020-03-05T05:52:08.766Z', phone: '604 716-9943', address: '123 Fake Street', department: 'unit', title: '10' }
  ]
  constructor() { }


  getAllEmployees() {
    		// mock data by creating instances of Product class
		return of(this.employees.map(
			(p: Employee) => new Employee(p.id, p.name, p.startDate, p.phone, p.address, p.department, p.title)
		));
  }
}
