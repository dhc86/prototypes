import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css']
})
export class TemplateDriveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
  }
}
