const mongoose = require('mongoose')

const YelpTokenSchema = new mongoose.Schema({
  access_token: {
    type: String,
    index: { unique: true }
  },
  expires_in: {
    type: Number,
    index: { unique: true }
  },
  createdAt: {
    type: Date,
    expires: '150d',
    default: Date.now
  }
})

const YelpToken = mongoose.model('YelpToken', YelpTokenSchema)

module.exports = YelpToken
