import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { todos } from '../_reducers/todos';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  it('should create an action to add a todo', () => {
        const state = [];
        const todo = { title: 'write tests', description: 'angular 2 tests' }
        const action = todos(state, { type: 'ADD_TODO', payload: todo })
        const expected = [...state, { title: 'write tests', description: 'angular 2 tests', id: new Date().getTime(), completed: false, isEdit: false, dateAdded: new Date()}];
        expect(action).toEqual(expected);
  });
});
