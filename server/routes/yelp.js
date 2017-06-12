const express = require('express')
const router = express.Router()
const getYelpToken = require('./lib/getYelpToken')
const getBars = require('./lib/getBars')

/**
 * Retrieves a Yelp API access token
 * If successful, An object {success: true} is returned, otherwise, an error object.
 * The access token is not sent back to the client.
 */
router.get('/token', (req, res) => {
  getYelpToken()
    .then(result => {
      if (result.success) {
        return res.json({ success: result.success })
      }
      return res.status(500).json({ error: result.error })
    })
    .catch(err => {
      return res
        .status(500)
        .json({ error: ['failed to get Yelp access token', err] })
    })
})

router.get('/bars/:location', (req, res) => {
  const { location } = req.params
  getYelpToken().then(result => {
    if (result.success) {
      getBars(location, result.accessToken)
        .then(result => {
          if (result.data) {
            return res.json({ success: true, barData: result.data })
          }
          console.error('failed to get bars. result:', result)
          return res.status(500).json({ error: 'failed to get bars', result })
        })
        .catch(err => {
          console.error('failed to get bars.', err)
          return res.status(500).json({ error: 'failed to get bars', err })
        })
    } else {
      console.error("couldn't retrieve access token from Yelp. result:", result)
      return res
        .status(500)
        .json({ error: "couldn't retrieve access token from Yelp." })
    }
  })
})

module.exports = router
