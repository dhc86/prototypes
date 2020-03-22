import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import {Event,  Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarSubOptions = [];

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: Event)=> {
      if(event instanceof NavigationStart) {
        if(event.url.indexOf('cocktails') !==-1) {
          this.navBarSubOptions = [
            {url: '/cocktails/categories', label: 'Categories'},
            {url: '/cocktails/glasses', label: 'Glasses'},
            {url: '/cocktails/ingredients', label: 'Ingredients'},
          ];
        }
        else if(event.url.indexOf('dashboard') !==-1) {
          this.navBarSubOptions = [
            {url: '/dashboard/products', label: 'Products'},
            {url: '/dashboard/employees', label: 'Employees'},
            {url: '/dashboard/orders', label: 'Orders'},
          ];
        }
      }
    })
  }

  ngOnInit(): void {

  }

}
