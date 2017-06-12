const axios = require('axios')

const getBars = function (location, accessToken) {
  return axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      location,
      categories: 'bars'
    },
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

module.exports = getBars
