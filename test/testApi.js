const axios = require('axios');
console.log('------1');
axios.get('http://localhost:3333/user/getBehavior?ID=12345')
  .then(function (response) {
    // handle success
    console.log('------2',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });