import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  changeName,
  customIncerement,
  decrement,
  increment,
  reset,
} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncerement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeName, (state, action) => {
    return {
      ...state,
      name: 'Rohan M Vasoya',
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
