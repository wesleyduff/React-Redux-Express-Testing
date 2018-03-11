export default(state = true) => {
   return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(state){
                resolve({
                    data : [
                        {
                            username: 'Wes'
                        }
                    ]
                },1000);
            } else {
                reject({
                    errorCode: 500,
                    message: "False returned from Mock"
                })
            }
        });
   });

}