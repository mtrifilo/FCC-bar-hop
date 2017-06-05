const YelpToken = require('../../db/models/Yelp')

/**
 * Saves a Yelp access token to the database
 *
 * @param { object } token
 * @returns { object } success or error object
 */
const saveYelpToken = function (token) {
  const yelpToken = new YelpToken({
    access_token: token.access_token,
    expires_in: token.expires_in
  })
  return yelpToken
    .save()
    .then(token => {
      console.log('saved yelp token:', token)
      return { success: true, accessToken: token }
    })
    .catch(err => {
      console.error('failed to save yelp token:', err)
      return { error: ['failed to save yelp token', err] }
    })
}

module.exports = saveYelpToken
