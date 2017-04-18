import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { LogInComponent } from '../log-in/log-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', redirectTo: '/' }
]

export const routing = RouterModule.forRoot(appRoutes);
