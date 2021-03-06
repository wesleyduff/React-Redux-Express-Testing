
import {
    THROW_ERROR, 
    CLEAR_ERROR,
    AWS_SIGN_UP_SAVING,
    AWS_SIGN_UP_FAIL,
    AWS_SIGN_UP_SUCCESS,
    SET_USER
} from '../_constants/actionTypes.js';
import Login from '../_actionRequests/login';

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
};

export function throwError(data) {
        return {
            type: THROW_ERROR,
            data
        }
    };
export function clearError(data) {
        return {
            type: CLEAR_ERROR,
            data
        }
    };
export function awsSignUpUser(data) {
        return {
            type: AWS_SIGN_UP_SAVING,
            data
        }
    };
export function awsSignUpUserFailed(data){
        return {
            type: AWS_SIGN_UP_FAIL,
            data
        }
}
export function awsSignUpUserSuccess(data){
    return {
        type: AWS_SIGN_UP_SUCCESS,
        data
    }
}


/** 
 * THUNKS
 */
export function login(username, password) {
    return (dispatch => {
        Login()
        .then(login_result => {
            if(login_result.id) {
                return dispatch(this.setUser(login_result));
            }
        })
    });
};
export function AWS_SignUpUser(username, password) {
    return (dispatch => {
        const data = {username, password};
        return dispatch(this.awsSignUpUser(data));
    });
};