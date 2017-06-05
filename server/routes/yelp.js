const express = require('express')
const router = express.Router()
const isEmpty = require('lodash/isEmpty')
const YelpToken = require('../db/models/Yelp')
const getYelpToken = require('./lib/getYelpToken')
const saveYelpToken = require('./lib/saveYelpToken')

router.get('/token', (req, res) => {
  YelpToken.find({}).then(doc => {
    if (isEmpty(doc)) {
      console.log('no token found, fetching one...:', doc)

      getYelpToken()
        .then(result => {
          if (result.success) {
            return saveYelpToken(result.accessToken)
          }
          return res.status(500).json({ error: result.error })
        })
        .then(result => {
          if (result.success) {
            return res.json(result)
          }
          return res.status(500).json({ error: result.error })
        })
        .catch(err => {
          return res
            .status(500)
            .json({ error: ['failed to retrieve Yelp access token', err] })
        })
    }

    console.log('token exists!:', doc)
    res.json({ success: true })
  })
})

module.exports = router
