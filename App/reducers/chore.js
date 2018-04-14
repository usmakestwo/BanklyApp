/* eslint no-underscore-dangle: 0 */
import update from 'immutability-helper';

import {
  CHORE_SERVICE_SUCCESS,
  CHORE_SERVICE_ERROR,
  CHORE_SERVICE_LOADING,
  CHORE_UPDATE_STATUS,
} from '../constants';

/**
 * Initial Chore state
 */
const initialState = {
  chores: [],
  hasErrored: false,
  isLoading: false,
  isSuccessful: false,
};

/**
 * Reducer for chores
 * @param {object} state - Chores
 * @param {object} action - Action type.
 */
export default function chores(state = initialState, action) {
  switch (action.type) {
    case CHORE_SERVICE_SUCCESS:
      return {
        ...state,
        chores: action.payload,
        isSuccessful: true,
      };
    case CHORE_UPDATE_STATUS:
      console.log('Before', state.chores);
      return {
        ...state,
        chores: flipValueInObject(state.chores, action.id),
      }
      console.log('After' + state.chores);
    case CHORE_SERVICE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case CHORE_SERVICE_ERROR:
      return {
        ...state,
        hasErrored: !state.hasErrored
      }
    default:
      return state;
  }
}

/**
 * 
 * @param {object} chores - Chore object
 * @param {integer} id - Chore ID
 */
function flipValueInObject(chores, choreId) {
  return update(chores, {id: {$apply: function(choreId) {
    return id === choreId ? completed = !completed : completed;
  }}});
}