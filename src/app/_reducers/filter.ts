export const filter = ( state = todo => todo, { type } = { type: "" } ) => {
    switch( type ) {
      case 'SHOW_UNCOMPLETED':
        return todo => !todo.completed;

      case 'SHOW_ALL':
        return todo => todo;

      case 'SHOW_COMPLETED':
        return todo => todo.completed;

        default:
          return state;
    }
}
