const io = require('../bin/www')
const init = require('./chat/init')

// on connection to my io server
io.on('connection', socket => {
  console.log('connecting...')
})

// the same as default export in React.JS
module.exports = io
