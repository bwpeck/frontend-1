import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, ADD_FORM_START, ADD_FORM_SUCCESS, ADD_FORM_FAIL } from '../../action'

const initialState = {
    login: [],
    grabData: false,
    token: localStorage.getItem('token'),
    error: '',
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                grabData: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                grabData: true,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                grabData: true,
                error: action.payload,
            }
        case ADD_FORM_START:
            return {
                ...state,
                grabData: true,
                error: '',
            }
        case ADD_FORM_SUCCESS:
            return {
                ...state,
                grabData: true,
                error: '',
            }
        case ADD_FORM_FAIL:
            return {
                ...state,
                grabData: true,
                error: '',
            }
        default:
            return state
    };
};
export default reducers