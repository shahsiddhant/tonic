import { Component, OnInit } from '@angular/core';
import { NavRoute } from '../../models';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public routes: NavRoute[] = [
    {
      routeName: 'Login',
      route: 'login'

    },
    {
      route: 'register',
      routeName: 'Register'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
