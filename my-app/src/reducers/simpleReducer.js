export default (state = {}, action) => {
 switch (action.type) {
  case 'GET_TODOS':
  	console.log('action', action);
   return {
   	...state,
    todos: action.payload
   }
  default:
   return state
 }
}
