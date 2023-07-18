import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncerement = createAction(
  'customIncerement',
  props<{ count: number }>()
);

export const changeName = createAction('changeName');
