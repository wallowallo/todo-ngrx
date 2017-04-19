import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  user = "wallowallo";
  loading = false;
  todoListShow = false;
  todos = [];
  checked = false;

  constructor() { }

  ngOnInit() {
    this.showTodoList();
  }

  newTodo(form: NgForm) {
    this.loading = true;
    let todo = [{
      id: this.todos.length,
      title: form.value.todoTitle,
      description: form.value.todoDescription
    }];
    this.todos = this.todos.concat(todo);
    this.loading = false;
    this.showTodoList();
    form.reset();
  }

  showTodoList() {
    if(this.todos.length > 0) {
      return this.todoListShow = true;
    }
    return this.todoListShow = false;
  }
}
