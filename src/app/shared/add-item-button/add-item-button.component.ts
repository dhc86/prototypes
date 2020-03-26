import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.scss']
})
export class AddItemButtonComponent implements OnInit {
  @Input() routeUrl: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([this.routeUrl]);
  }

}
