import nock from 'nock';
import request from 'superagent';



    describe('Calling AWS SDK to sign up a user successful', () => {
        let postData = {username: 'fake@fake.com', password: '@Password1'};
        let _request = null;
        beforeEach(() => {
            
            nock('http://aws-sdk.aws.com/', {
                reqheaders: {
                    "content-type": "application/json",
                }          
            })
            .post('/cognito/signUpUser', {username: 'fake@fake.com', password: '@Password1'})
            .reply(200, {
                ok: true,
                cognito_id: 123456,
                cognito_user: 'fake_name@fake.com'
            });

            _request = request
                .post('http://aws-sdk.aws.com/cognito/signUpUser')
                .set('accept', 'json');
        })
        

        it('Should return a 200', () => {

            _request
                .send(JSON.stringify(postData))
                .end((err, res) => {
                    if(err){
                        console.log('------ ERROR : ')
                        console.log(err);
                    } else {
                        expect(res.statusCode).toEqual(200);
                    }
                })

        })

        it('Should return a cognito id of 123456', () => {
            _request
                .send(JSON.stringify(postData))
                .end((err, res) => {
                    if(err){
                        console.log('---- ERROR : ');
                        console.log(err);
                    } else {
                        expect(res.body.cognito_id).toBe('123456')
                    }
                })
        });

        it('Should return a cognito user of "fake@fake.com', () => {
            _request
            .send(JSON.stringify(postData))
            .end((err, res) => {
                if(err){
                    console.log('---- ERROR : ');
                    console.log(err);
                } else {
                    expect(res.body.cognito_user).toBe('fake@fake.com');
                }
            })
        })
    })

    describe('Calling AWS SDK to sign up a user fails', () => {
        let postData = {username: 'fake@fake.com', password: '@Password1'};
        let _request = null;
        beforeEach(() => {
            
            nock('http://aws-sdk.aws.com/', {
                reqheaders: {
                    "content-type": "application/json",
                }          
            })
            .post('/cognito/signUpUser', {username: 'fake@fake.com', password: '@Password1'})
            .reply(500, {
                ok: false,
                message: "User does not exist"
            });

            _request = request
                .post('http://aws-sdk.aws.com/cognito/signUpUser')
                .set('accept', 'json');
        });

        it('Should dispatch an error action', () => {
            _request
                .send(JSON.stringify(postData))
                .end((err, data){
                    if(err){
                        //dispatch error action
                    }
                })
        })