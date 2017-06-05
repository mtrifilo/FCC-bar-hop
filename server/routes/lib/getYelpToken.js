const isEmpty = require('lodash/isEmpty')
const YelpToken = require('../../db/models/Yelp')
const getNewYelpToken = require('./getNewYelpToken')
const saveYelpToken = require('./saveYelpToken')

const getYelpToken = function () {
  return YelpToken.find({}).then(doc => {
    // If no access token is found in the database, get a new one from Yelp
    if (isEmpty(doc)) {
      console.log('no token found, fetching one...:', doc)

      getNewYelpToken()
        .then(result => {
          if (result.success) {
            return saveYelpToken(result.accessToken)
          }
          return { error: result.error }
        })
        .then(result => {
          if (result.success) {
            return { success: result.success, accessToken: result.accessToken }
          }
          return { error: result.error }
        })
        .catch(err => {
          return { error: ['failed to retrieve Yelp access token', err] }
        })
    }

    return { success: true, accessToken: doc[0] }
  })
}

module.exports = getYelpToken
