const request = require('request')

const current = (address, callback) => {
    console.log(address);
    const url='http://api.weatherstack.com/current?access_key=3d35ff6faa689c318c1f8d7286a177b0&query=RG145LR';

    request({ url ,json:true}, (error,  response ) => {
        console.log(error);
        console.log(response.body);
        body=response.body;
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {

            
            callback(undefined, {temp:response.body.current.temperature})
        }
    })
}

module.exports = current