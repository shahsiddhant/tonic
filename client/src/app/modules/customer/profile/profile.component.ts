import { Component, OnInit } from '@angular/core';
import { LoginService, Customer } from '../../../shared/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: Customer;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.profile().subscribe(res => {
      this.user = new Customer(res);
    });
  }
}
