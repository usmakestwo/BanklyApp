/* eslint no-underscore-dangle: 0 */
import {
  CHORE_SERVICE_SUCCESS,
  CHORE_SERVICE_ERROR,
  CHORE_SERVICE_LOADING
} from '../constants';

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
      debugger;
      return {
        ...state,
        chores: action.payload,
        isSuccessful: true,
      };
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