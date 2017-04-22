export const todo = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_TODO':
          return [
              ...state,
              action.payload
            ];

        case 'UPDATE_TODO':
          return state.map( todo => ( todo.title === action.payload.title && todo.description === action.payload.description ) ?
            ({ ...todo, title: action.payload.title, description: action.payload.description, isEdit: false, completed: false }) : todo );

        case 'DELETE_TODO':
          return state.filter( todo => todo.id !== action.payload );

        case 'TOGGLE_TODO_COMPLETED':
          return state.map( todo => ( todo.id === action.payload ) ? ({ ...todo, completed: !todo.completed }) : todo );

        case 'TOGGLE_EDIT_TODO':
          return state.map( todo =>  ( todo.id === action.payload ) ? ({ ...todo, isEdit: !todo.isEdit }) : ({ ...todo, isEdit: todo.isEdit = false }) );

        default:
          return state;
    }
}
