import * as ActionTypes from '../../_constants/actionTypes';
import * as ActionCreators from '../registerActions';

describe('Actions', () => {
    let username = "fake@fake.com";
    let password = "@Password1";
    const dispatch = jest.fn();


    it("Should set a user", () => {
        const user =  {
            id: '00001',
            email: 'fake@fake.com',
            JWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'
        };

        const expected = {
            type: ActionTypes.SET_USER,
            user
        };
        
        const actual = ActionCreators.setUser(user);
        expect(actual).toEqual(expected);
    })

    it("Should start the process of registering a user", () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.AWS_SIGN_UP_SAVING,
            data: {username, password}
        };

        //we expect this to return a function since it is a thunk
        expect(typeof (ActionCreators.AWS_SignUpUser(username, password))).toEqual('function');

        //then we simulate calling it with dispatch as the store would do
        ActionCreators.AWS_SignUpUser(username, password)(dispatch);

        //finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
    });

    it("should create an action to fail a signup", () => {
        const data =  {errorCode: 500, message: 'User already exists'};
        const expected = {
            type: ActionTypes.AWS_SIGN_UP_FAIL,
            data: data
        }

       const actual = ActionCreators.awsSignUpUserFailed(data);
        
       expect(actual).toEqual(expected);

    });

    it("should create an action to signup a user", () => {
        const data = {cognito_user: 'fake@fake.com'};
        const expected = {
            type: ActionTypes.AWS_SIGN_UP_SUCCESS,
            data
        }

       const actual = ActionCreators.awsSignUpUserSuccess(data);
        
       expect(actual).toEqual(expected);

    });

    it("should create an action to throw an error", () => {
        const data = {error: {code:500, mesage: 'Something went wrong'}};
        const expected = {
            type: ActionTypes.THROW_ERROR,
            data
        }

       const actual = ActionCreators.throwError(data);
        
       expect(actual).toEqual(expected);

    });

    it("should create an action to clear an error", () => {
        const data = {error: null}
        const expected = {
            type: ActionTypes.CLEAR_ERROR,
            data
        }

       const actual = ActionCreators.clearError(data);
        
       expect(actual).toEqual(expected);

    });

});