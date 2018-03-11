import * as ActionTypes from '../../_constants/actionTypes';
import * as ActionCreators from '../registerActions';

describe('Actions', () => {
    let username = "fake@fake.com";
    let password = "@Password1";

    it("Should create a registered user", () => {
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

});