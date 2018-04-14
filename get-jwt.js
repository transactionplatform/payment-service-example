const dotenv = require('dotenv');
const axios = require('axios');

async function getJWT () {
    const { data } = await axios.post(
        'https://api.emviodev.com/user/v3/login',
        {
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        }
    );
    return data.token;
}

dotenv.config();
getJWT().then((jwt) => {
    //eslint-disable-next-line no-console
    console.log(jwt);
}).catch((err) => {
    console.error(err);
});
