const axios = require('axios')
const qs = require('qs')
const { YELP_CLIENT_ID, YELP_CLIENT_SECRET } = require('../../../config.json')

/**
 * Retrieves an access token for Yelp's API
 *
 * @returns { object } token object or error object
 *
 */
const getYelpToken = function () {
  return axios
    .post(
      'https://api.yelp.com/oauth2/token',
      qs.stringify({
        client_id: YELP_CLIENT_ID,
        client_secret: YELP_CLIENT_SECRET
      })
    )
    .then(yelpRes => {
      const accessToken = yelpRes.data

      if (accessToken) {
        console.log('accessToken:', accessToken)
        return { accessToken, success: true }
      } else {
        console.error('getYelpToken failed: no data in the response', yelpRes)
        return { error: ['no data in the response', yelpRes] }
      }
    })
    .catch(err => {
      console.error('getYelpToken failed:', err)
      return { error: ['getYelpToken failed', err] }
    })
}

module.exports = getYelpToken
