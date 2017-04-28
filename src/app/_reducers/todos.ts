const defaultTodos = [
  {title: 'Read', description: 'Read about Javascript', completed: true, id: 1, isEdit: false, dateAdded: new Date()},
  {title: 'Learn', description: 'Learn about redux', completed: true, id: 2, isEdit: false, dateAdded: new Date()},
  {title: 'Learn', description: 'Learn DevOps', completed: true, id: 3, isEdit: false, dateAdded: new Date()},
  {title: 'Code', description: 'Refactor clock-ngrx app', completed: true, id: 4, isEdit: false, dateAdded: new Date()},
  {title: 'Plan', description: 'Use trello to plan next project', completed: true, id: 5, isEdit: false, dateAdded: new Date()},
  {title: 'Chores', description: 'Buy groceries', completed: false, id: 6, isEdit: false, dateAdded: new Date()}
]

export const todos = ( state = defaultTodos, { type, payload } = { type: "", payload: null } ) => {
    switch( type ) {
        case 'ADD_TODO':
          return [
              ...state,
              {
                title: payload.title,
                description: payload.description,
                id: new Date().getTime(),
                completed: false,
                isEdit: false,
                dateAdded: new Date()
              }
            ];

        case 'UPDATE_TODO':
          return state.map( todo => ( todo.id === payload.id ) ?
            ({ ...todo, title: payload.title, description: payload.description, isEdit: false, completed: false }) : todo );

        case 'DELETE_TODO':
          return state.filter( todo => todo.id !== payload );

        case 'TOGGLE_TODO_COMPLETED':
          return state.map( todo => ( todo.id === payload ) ? ({ ...todo, completed: !todo.completed }) : todo );

        case 'TOGGLE_EDIT_TODO':
          return state.map( todo =>  ( todo.id === payload ) ? ({ ...todo, isEdit: !todo.isEdit }) : ({ ...todo, isEdit: todo.isEdit = false }) );

        default:
          return state;
    }
}
