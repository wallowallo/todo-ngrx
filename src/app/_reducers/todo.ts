export const todo = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_TODO':
          return [
              ...state,
              action.payload
            ];
        case 'UPDATE_TODO':
          return state;
        case 'DELETE_TODO':
          return state;
        case 'TOGGLE_TODO':
          return state;
        case 'EDIT_TODO':
          return state;

        default:
          return state;
    }
}
