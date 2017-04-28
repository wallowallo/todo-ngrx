import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  inputType = 'password';
  passwordHidden = false;
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  login( form : NgForm) {

  }

  hidePassword() {
    this.inputType = 'password';
    this.passwordHidden = false;
  }

  showPassword() {
    this.inputType = 'text';
    this.passwordHidden = true;
  }

}
