import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/withLatestFrom';

import { Todo } from '../_models/todo';
import { todos } from '../_reducers/todos';
import { filter } from '../_reducers/filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public todos;
  user = "Krister";
  color = '';
  value = 0;

  //subjects
  addTodo$ = new Subject()
    .map( (todo: any ) => ({ type: 'ADD_TODO', payload: todo }));

  updateTodo$ = new Subject()
    .map( (todo: any ) => ({ type: 'UPDATE_TODO', payload: todo }));

  deleteTodo$ = new Subject()
    .map( ( value: number ) => ({ type: 'DELETE_TODO', payload: value }));

  toggleEditTodo$ = new Subject()
    .map( ( value: number ) => ({ type: 'TOGGLE_EDIT_TODO', payload: value }));

  toggleTodoCompleted$ = new Subject()
    .map((value: number) => ({ type: 'TOGGLE_TODO_COMPLETED', payload: value }));

  toggleFilterList$ = new Subject()
    .map((filter: any) => ({ type: filter }));

  todoProgress$ = new Subject()


  constructor(private _store: Store<any>) {
      this.todos = Observable.combineLatest(
			_store.select('todos'),
			_store.select('filter'),
			(todos: Todo[], filter: any) => {
				return todos.filter(filter);
			});

      this.todoProgress$
        .withLatestFrom(this.todos, (_,y) => y)
        .map((todo) =>  todo)
        .subscribe((todos) => {
          this.todoProgress(todos);
          this.progressBarColor();
        });

      Observable.merge(
        this.deleteTodo$,
        this.toggleEditTodo$,
        this.toggleTodoCompleted$,
        this.updateTodo$,
        this.addTodo$,
        this.toggleFilterList$
      )
        .subscribe(_store.dispatch.bind(_store));


  }

  ngOnInit() {
    this.todoProgress$.next();
    this.progressBarColor();
  }

  todoProgress(todos: any) {
    let a = todos.map((todo) => todo)
    let filter = a.filter((todo) => todo.completed);
    let individualValue = 100/a.length;
    let value = filter.length * individualValue;
    return this.value = value;
  }

  progressBarColor() {
    if (this.value >= 0 && this.value < 50) {
      return this.color = 'warn';
    } else if (this.value >= 50 && this.value < 100) {
      return this.color = 'accent';
    }
    return this.color = 'primary';
  }
}
