import {SubmissionError} from 'redux-form';
import axios from 'axios';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const MAP_GUEST_USERS = 'MAP_GUEST_USERS';
export function mapGuestUsers(data) {
  return {
    type: MAP_GUEST_USERS,
    data
  };
}

export const loadGuestApprovers = () => (dispatch) => {
    axios.get(`${API_BASE_URL}/users`, {

    })
      .then(result => {
          dispatch(mapGuestUsers(result.data));
      })
      .catch(error => console.log(error));
  }