const YelpToken = require('../../db/models/Yelp')

const saveYelpToken = function (token) {
  const yelpToken = new YelpToken({
    access_token: token.access_token,
    expires_in: token.expires_in
  })
  return yelpToken
    .save()
    .then(token => {
      console.log('saved yelp token:', token)
    })
    .catch(err => {
      console.error('failed to save yelp token:', err)
    })
}

module.exports = saveYelpToken
