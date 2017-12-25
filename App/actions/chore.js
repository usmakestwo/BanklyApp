/* eslint-disable import/prefer-default-export */

import {
  CHORE_SERVICE_SUCCESS,
  CHORE_SERVICE_ERROR,
  CHORE_SERVICE_LOADING
} from '../constants';

import fetchChoreByCustId from '../api/chore';


/**
 * Action Creator for successful chore service
 * @param {object} payload - Routes
 */
export const choreFetchSuccess = payload => ({
  type: CHORE_SERVICE_SUCCESS,
  payload,
});

/**
 * Action Creator for error chore service
 * @param {*} payload - Error object
 */
export const choreFetchError = payload => ({
  type: CHORE_SERVICE_ERROR,
  payload,
});

/**
 * Dispatches an action to retrieve todo structure for Todo Service
 * @param {string} id - Customer ID
 */
export const getChoreService = id => async dispatch => {
  try {
    dispatch(choreFetchSuccess(await fetchChoreByCustId(id)));
    debugger;
  } catch (e) {
    debugger;
    dispatch(choreFetchError(e));
    console.error(e);
  }
};