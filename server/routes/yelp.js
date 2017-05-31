const express = require('express')
const router = express.Router()
const isEmpty = require('lodash/isEmpty')
const YelpToken = require('../db/models/Yelp')
const getYelpToken = require('./lib/getYelpToken')

router.get('/token', (req, res) => {
  YelpToken.find({}).then(doc => {
    if (isEmpty(doc)) {
      console.log('no token found, fetching one...:', doc)
      return getYelpToken(res)
    }
    console.log('token exists!:', doc)
    res.json(doc[0])
  })
})

module.exports = router
