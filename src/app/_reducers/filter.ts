export const filter = ( state = [], action) => {
    switch( action.type ) {
        case 'ALL':
          return state;
        case 'UNCOMPLETE':
          return state;
        case 'COMPLETE':
          return state;

        default:
          return state;
    }
}
