const express = require('express')
const router = express.Router()
const getYelpToken = require('./lib/getYelpToken')

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

module.exports = router
