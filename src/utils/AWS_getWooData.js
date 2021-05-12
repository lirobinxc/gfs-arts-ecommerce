const axios = require('axios');

const getWooData = async () => {
  try {
    console.log('📣 API key', process.env.REACT_APP_AWS_API_KEY);
    console.log('📣 RUNNING getWooData');
    const res = await axios.get(
      'https://tjll4nbdib.execute-api.us-east-1.amazonaws.com/default/connectToWooAPI',
      { headers: { 'X-API-KEY': process.env.REACT_APP_AWS_API_KEY } }
    );
    console.log('📣', res.data);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default getWooData;
