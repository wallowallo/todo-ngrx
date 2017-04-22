import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

import { todo } from '../_reducers/todo';
import { filter } from '../_reducers/filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public todos;
  public id = 0;
  user = "Krister";
  loading = false;
  todoListShow = false;
  color = '';
  mode = 'determinate';
  value = 0;

  constructor(
    private _store: Store<any>
  ) {
      _store.select('todo')
            .subscribe( todo => {
                this.todos = todo;
      });
      // this.todos = Observable.combineLatest(
      //   _store.select('todos'),
      //   _store.select('filter'),
      //   ( todos: any[], filter ) => {
      //     return todos.filter(filter);
      //   }
      // )
  }

  ngOnInit() {
    this.progressBarColor();
    this.showTodoList();
  }

  addTodo( form: NgForm ) {
    this._store.dispatch({ type: 'ADD_TODO', payload: {
        id: ++this.id,
        title: form.value.todoTitle,
        description: form.value.todoDescription
    }})
    form.reset();
    this.showTodoList();
  }

  updateTodo( form: NgForm ) {
    this._store.dispatch( { type: 'UPDATE_TODO', payload: {
      title: form.value.title,
      description: form.value.description
    }});
  }

  deleteTodo( id: number ) {
    this.showTodoList();
    return this._store.dispatch( { type: 'DELETE_TODO', payload: id });
  }

  editTodo( id: number ) {
    return this._store.dispatch( { type: 'TOGGLE_EDIT_TODO', payload: id });
  }

  cancelEdit( id: number ) {
    this.editTodo(id);
  }

  todoProgress( id: number ) {
    return this.value = 100/this.todos.length;
  }

  toggleTodo( id: number ) {
    this._store.dispatch({ type: 'TOGGLE_TODO_COMPLETED', payload: id });
  }

  showTodoList() {
    if (this.todos.length > 0) {
      return this.todoListShow = true;
    }
    return this.todoListShow = false;
  }

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
