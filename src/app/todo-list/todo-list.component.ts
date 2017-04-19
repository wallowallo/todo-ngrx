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
  todos = [];

  constructor() { }

  ngOnInit() {
  }

  newTodo(form: NgForm) {
    let todo = [{
      id: this.todos.length,
      title: form.value.todoTitle,
      description: form.value.todoDescription
    }];
    this.todos = this.todos.concat(todo); //make to concat to not mutate array
    this.loading = true;
    console.log(this.todos);
    form.reset();
  }

}
