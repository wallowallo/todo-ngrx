import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

import { Password } from '../_interfaces/password.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public password: Password;
  inputsType = 'password';
  passwordHidden = false;

  constructor() { }

  ngOnInit() {
    this.password = {
           username: '',
           password: '',
           passwordEqual: ''
       }
  }

  signup( form : NgForm) {

  }

  hidePasswords() {
    this.inputsType = 'password';
    this.passwordHidden = false;
  }

  showPasswords() {
    this.inputsType = 'text';
    this.passwordHidden = true;
  }
}
