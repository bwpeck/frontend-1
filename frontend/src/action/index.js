import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ADD_FORM_START = 'ADD_FORM_START';
export const ADD_FORM_SUCCESS = 'ADD_FORM_SUCCESS';
export const ADD_FORM_FAIL = 'ADD_FORM_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    return axios.post('https://devdeskqueue.herokuapp.com/api/auth/login', creds)

        .then(res => {
            localStorage.setItem('token', res.data.token)
            axios.defaults.headers.common['Authorization'] = res.data.token;
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            return 1
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAIL, payload: err })
            return 0
        }
        )

}
export const addForm = newForm => dispatch => {
    dispatch({ type: ADD_FORM_START });
    console.log(newForm)

    return axios.post('https://devdeskqueue.herokuapp.com/api/tickets', newForm)
        .then(res => {
            dispatch({ type: ADD_FORM_SUCCESS, payload: res.data })
        })

        .catch(err => dispatch({ type: ADD_FORM_FAIL, payload: err }))
}