export const filter = ( state = todo => todo, action ) => {
    switch( action.type ) {
        case 'SHOW_ALL':
          return this.todo;

        case 'SHOW_UNCOMPLETED':
          return todo => !todo.completed;

        case 'SHOW_COMPLETED':
          return todo => todo.completed;

        default:
          return state;
    }
}
