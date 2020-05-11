import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  public  loginClick(): void {
    console.log(123);
    this.route.navigate(['home/main']);
  }
}
