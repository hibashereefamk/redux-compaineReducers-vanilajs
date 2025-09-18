import { combineReducers, legacy_createStore as createStore} from "redux";
 //action type
const INCREMENT='increment';
const DECREMeNT='decremnt ';
const ADD_TODO= 'addtodos';
const DELETE_TODO='deletetodos';
//action creators
const increment =()=>({type:INCREMENT});
const decerement=()=>({type:DECREMeNT});
const addtodo=(text)=>({type:ADD_TODO,playload:text});
const deletetodos=(item)=>({type:DELETE_TODO,playload:item});
//reducer
function CounterReducer(state={count:0},action){
  switch (action.type) {
    case INCREMENT:
     return { count:state.count + 1};
     case DECREMeNT:
     return { count:state.count - 1};
   default:
   
       return state;
  }
}
function TodosReducer(state=[],action){
  switch (action.type) {
    case ADD_TODO:
     return [...state,action.playload];
     case DELETE_TODO:
     return state.filter((_,item)=>item!==action.playload);
   default:
    return state;
      
  }
}
const rootReducer=combineReducers({
  counter:CounterReducer,
  todos:TodosReducer,
});

const store= createStore(rootReducer);
store.subscribe(()=>{
  console.log("update state",store.getState());
});
store.dispatch(increment());
store.dispatch(decerement());
store.dispatch(addtodo('lern redux'));
store.dispatch(addtodo("Practice combineReducers'"));
store.dispatch(addtodo("hellooo"));
store.dispatch(deletetodos(0));
  

