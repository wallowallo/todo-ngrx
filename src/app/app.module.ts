import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//services


//imports
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { todo } from './_reducers/todo';
import {
        MdProgressBarModule,
        MdInputModule,
        MdToolbarModule,
        MdListModule,
        MdCardModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdButtonToggleModule,
        MdTooltipModule
       } from '@angular/material';
import { routing } from './_routing/routing';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    StoreModule.provideStore({ todo }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonToggleModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    routing
  ],
  providers: [
    //services
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
