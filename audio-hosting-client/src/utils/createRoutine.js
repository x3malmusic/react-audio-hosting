import { createRoutineCreator } from 'redux-saga-routines';

export const createRoutine = createRoutineCreator([
  'REQUEST',
  'LOADING',
  'SUCCESS',
  'FAIL',
]);