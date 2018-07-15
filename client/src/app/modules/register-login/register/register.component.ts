import { Component, OnInit } from '@angular/core';
import { LoginService } from 'services';
import { Customer, TokenPayload } from 'services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public name: string;
  public email: string;
  public password: string;
  public currentCusotmer: Customer = null;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit() { }

  public register() {
    const newCustomer: TokenPayload = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.loginService.register(newCustomer).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.log(err);
    });
  }
}
