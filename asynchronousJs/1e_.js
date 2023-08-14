const axios = require('axios')

axios.get('https://dog.ceo/api/breeds/list/all')
.then((res)=> console.log(res))
.catch((error) => console.log(error))