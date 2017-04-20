import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Todo } from '../_model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public todo: Todo;
  user = "Krister";
  loading = false;
  todoListShow = false;
  todos = [];
  color = '';
  mode = 'determinate';
  value = 0;
  selected: string;
  isEdit = false;

  constructor() { }

  ngOnInit() {
    this.progressBarColor();
    this.showTodoList();
    this.todo = {
      title: '',
      description: '',
      isEdit: false,
      id: 0
    }
  }

  newTodo( form: NgForm ) {
    this.loading = true;
    let todo = {
      id: this.todos.length,
      title: form.value.todoTitle,
      description: form.value.todoDescription,
      isEdit: false,
      completed: false
    };
    this.todos = [...this.todos, todo];
    this.loading = false;
    this.showTodoList();
    this.todoProgress(todo);
    form.reset();
  }

  updateTodo( form: NgForm, i: number ) {
    let todo = {
      title: form.value.title,
      description: form.value.description,
      isEdit: false
    };
  }

  deleteTodo( i: any ) {
    return this.todos = [
              ...this.todos.slice(0, i),
              ...this.todos.slice(i + 1)
            ];
  }

  editTodo( todo: any ) {
    return {
      ...todo,
      isEdit: todo.isEdit = true
    };
  }

  cancelEdit( todo: any ) {
    return {
      ...todo,
      isEdit: todo.isEdit = false
    };
  }

  todoProgress( todo: any ) {
    if(todo.completed === true) {
      return this.value = 100/this.todos.length;
    }
    return ;
  }

  toggleTodo( todo: any ) {
    if ( todo.completed === true ) {
      return {
          ...todo,
          completed: todo.completed = false
      };
    }
    return {
      ...todo,
      completed: todo.completed = true
    };
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

  toggleList( value: string) {
    if ( value === 'uncompleted' ) {
      return this.todos = [
        ...this.todos.filter(todo => !todo.completed)
      ];
    } else if ( value === 'completed' ) {
      return this.todos = [
        ...this.todos.filter(todo => todo.completed)
      ];
    }
    return this.todos;
  }
}
