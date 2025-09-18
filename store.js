// Enable ES modules: Add "type": "module" to package.json
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

// --- Action Types ---
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// --- Action Creators ---
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// --- Reducer ---
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// --- Logger Middleware ---
const logger = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('New State:', store.getState());
  return result;
};

// --- Redux DevTools Integration ---
const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// --- Create Store ---
const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(logger))
);

// --- Subscribe ---
store.subscribe(() => console.log('State changed:', store.getState()));

// --- Dispatch Actions ---
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

export default store;
