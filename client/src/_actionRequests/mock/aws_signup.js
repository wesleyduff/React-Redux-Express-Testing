import request from 'superagent';
import CONSTANTS from '../../_constants/default';
export default ((username, password) => {

    let _request = request
        .post(CONSTANTS.AWS_API_BASE+CONSTANTS.AWS_SIGNUP)
        .set('accept', 'json');
        .send(JSON.stringify(postData))
        .end((err, res) => {
            if(err){
                console.log('------ ERROR : ')
                console.log(err);
                //dispatch error
            } else {
                //dispatch success
            }
        })

});