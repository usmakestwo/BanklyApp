/* eslint-disable import/prefer-default-export */

import {
  CHORE_SERVICE_SUCCESS,
  CHORE_SERVICE_ERROR,
  CHORE_SERVICE_LOADING,
  CHORE_UPDATE_STATUS
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
 * @param {object} payload - Error object
 */
export const choreFetchError = payload => ({
  type: CHORE_SERVICE_ERROR,
  payload,
});

/**
 * Update complete status of chore
 * @param {string} id - Chore Id
 */
export const choreUpdateStatus = id => ({
  type: CHORE_UPDATE_STATUS,
  id,
});

/**
 * Dispatches an action to retrieve chore structure for Chore Service
 * @param {string} id - Customer ID
 */
export const getChoreService = id => async dispatch => {
  try {
    dispatch(choreFetchSuccess(await fetchChoreByCustId(id)));
  } catch (e) {
    dispatch(choreFetchError(e));
    console.error(e);
  }
};
