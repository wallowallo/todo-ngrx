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
  user = "Krister";
  loading = false;
  todoListShow = false;
  todos = [];
  color = '';
  mode = 'determinate';
  value = 100;
  isEdit: boolean;

  constructor() { }

  ngOnInit() {
    this.progressBarColor();
    this.showTodoList();
  }

  newTodo(form: NgForm) {
    this.loading = true;
    let todo = {
      id: this.todos.length,
      title: form.value.todoTitle,
      description: form.value.todoDescription
    };
    this.todos = this.todos.concat(todo);
    this.loading = false;
    this.showTodoList();
    form.reset();
  }

  updateTodo(form: NgForm, index: number) {
    let todo = {
      title: form.value.todoTitle,
      description: form.value.todoDescription
    }
  }

  deleteTodo(todo: any) {
    this.todos.slice(todo);
  }

  editTodo(todo: any) {
    todo.isEdit = true;
  }

  cancelEdit(todo: any) {
    todo.isEdit = false;
  }

  showTodoList() {
    if(this.todos.length > 0) {
      return this.todoListShow = true;
    }
    return this.todoListShow = false;
  }

  progressBarColor() {
    if(this.value >= 0 && this.value < 50) {
      return this.color = 'warn';
    } else if (this.value >= 50 && this.value < 100) {
      return this.color = 'accent';
    }
    return this.color = 'primary';
  }
}
