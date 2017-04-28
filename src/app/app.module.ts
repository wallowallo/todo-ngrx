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
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EqualValidator } from './_directives/equal_validator.directive';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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

//reducers
import { todos } from './_reducers/todos';
import { filter } from './_reducers/filter';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LogInComponent,
    SignUpComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ todos, filter }),
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
    routing,
    StoreDevtoolsModule.instrumentOnlyWithExtension()
    //!environment.production ? StoreDevtoolsModule.instrumentOnlyWithExtension() : [] when you want to not have the devtools in production mode
  ],
  providers: [
    //services
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
