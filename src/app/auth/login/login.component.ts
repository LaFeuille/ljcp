import { Component, OnInit } from '@angular/core';
import { AuthService } from '../state/auth.service';

@Component({
  template: ''
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.login();
  }

}