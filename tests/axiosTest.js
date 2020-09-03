const ax = require('axios');

const getAllCat = async () => {
  var catData = await ax.get('http://{{url}}/sample/all'); // fill as u desire;
  data = catData['data']['data']
  console.log(data);
} 

getAllCat();