import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCouterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCouterState, (state) => {
  return state.counter;
});

export const getName = createSelector(getCouterState, (state) => {
  return state.name;
});
