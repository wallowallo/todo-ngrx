export const todo = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_TODO':
          return [
              ...state,
              action.payload
            ];
        case 'UPDATE_TODO':
          return state.map( todo => {
            if ( todo.title === action.payload.title && todo.description === action.payload.description ) {
              return {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
                isEdit: false
              };
            }
            return {
              ...todo,
              isEdit: false
            };
          });
        case 'DELETE_TODO':
          return state.filter( todo => todo.id !== action.payload );
        case 'TOGGLE_TODO_COMPLETED':
          return state.map( todo => {
            if ( todo.id === action.payload ) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          });
        case 'TOGGLE_EDIT_TODO':
        return state.map( todo => {
          if ( todo.id === action.payload ) {
            return {
              ...todo,
              isEdit: !todo.isEdit
            };
          }
          return {
            ...todo,
            isEdit: false
          };
        });

        default:
          return state;
    }
}
