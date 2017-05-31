const axios = require('axios')
const qs = require('qs')
const { YELP_CLIENT_ID, YELP_CLIENT_SECRET } = require('../../../config.json')
const saveYelpToken = require('./saveYelpToken')

const getYelpToken = function (res) {
  return axios
    .post(
      'https://api.yelp.com/oauth2/token',
      qs.stringify({
        client_id: YELP_CLIENT_ID,
        client_secret: YELP_CLIENT_SECRET
      })
    )
    .then(yelpRes => {
      if (yelpRes.data) {
        console.log('yelpRes.data', yelpRes.data)
        res.json(yelpRes.data)
        saveYelpToken(yelpRes.data)
      }
    })
    .catch(err => {
      console.error('getYelpToken failed:', err)
    })
}

module.exports = getYelpToken
