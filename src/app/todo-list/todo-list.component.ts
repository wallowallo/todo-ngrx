import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/merge';
import 'rxjs/Rx';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public id = 0;
  user = "Krister";
  loading = false;
  todoListShow = false;
  color = '';
  value = 0;

  //subjects
  addTodo$ = new Subject()
    .map( (todo: any ) => ({ type: 'ADD_TODO', payload: {...todo, id: ++this.id} }));

  updateTodo$ = new Subject()
    .map( (todo: any ) => ({ type: 'UPDATE_TODO', payload: todo }));

  deleteTodo$ = new Subject()
    .map( ( value: number ) => ({ payload: value, type: 'DELETE_TODO' }));

  toggleEditTodo$ = new Subject()
    .map( ( value: number ) => ({ payload: value, type: 'TOGGLE_EDIT_TODO' }));

  toggleTodoCompleted$ = new Subject()
    .map((value: number) => ({ payload: value, type: 'TOGGLE_TODO_COMPLETED' }))

todos;

  constructor(private _store: Store<any>) {
      this.todos = _store.select('todos');

      Observable.merge(
        this.deleteTodo$,
        this.toggleEditTodo$,
        this.toggleTodoCompleted$,
        this.updateTodo$,
        this.addTodo$
      )
        .subscribe(_store.dispatch.bind(_store));
  }

  ngOnInit() {
    this.progressBarColor();
    // this.showTodoList();
  }

  todoProgress( id: number ) {
    return this.value = 100/this.todos.length;
  }

  toggleTodo( id: number ) {
    this._store.dispatch({ type: 'TOGGLE_TODO_COMPLETED', payload: id });
  }

  // showTodoList() {
  //     return this.todoListShow = true;
  // }

  progressBarColor() {
    if (this.value >= 0 && this.value < 50) {
      return this.color = 'warn';
    } else if (this.value >= 50 && this.value < 100) {
      return this.color = 'accent';
    }
    return this.color = 'primary';
  }

  toggleFilterList( filter ) {
    this._store.dispatch({ type: filter });
  }
}
