import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { saveAuthToken, clearAuthToken } from "../local-storage";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const LOG_OUT_CURRENT_USER = "LOG_OUT_CURRENT_USER";
export const logOutCurrentUser = () => ({
  type: LOG_OUT_CURRENT_USER
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(setCurrentUser(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
  const token = btoa(`${username}:${password}`);
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      if (code === 401) {
        return Promise.reject(
          new SubmissionError({
            _error: "Incorrect username or password"
          })
        );
      }
    });
};

export const refreshAuthToken = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { code } = err;
      if (code === 401) {
        dispatch(setCurrentUser(null));
        dispatch(setAuthToken(null));
        clearAuthToken(authToken);
      }
    });
};
