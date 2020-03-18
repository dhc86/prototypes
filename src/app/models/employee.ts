export class Employee {
    id: string;
    name: string;
    startDate: string;
    phone: string;
    address: string;
    department: string;
    title: string;

    constructor(
      id: string,
      name: string,
      startDate: string,
      phone: string,
      address: string,
      department: string,
      title: string) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.phone = phone;
        this.address = address;
        this.department = department;
        this.title = title;
      }
}
