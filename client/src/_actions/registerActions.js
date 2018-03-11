
import {
    THROW_ERROR, 
    CLEAR_ERROR,
    AWS_SIGN_UP_SAVING
} from '../_constants/actionTypes.js'

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
export function awsSigningUpUser(data) {
        return {
            type: AWS_SIGN_UP_SAVING,
            data
        }
    };


/** 
 * THUNKS
 */
export function AWS_SignUpUser(username, password) {
    return (dispatch => {
        return dispatch({
            type: AWS_SIGN_UP_SAVING,
            data: {username, password}
        });
    });
};