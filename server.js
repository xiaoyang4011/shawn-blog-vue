const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const port = process.env.PORT || 8888

app.use(express.static(path.join(__dirname, 'dist')))
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.get('/*', function (req, res) {
  return res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen(port, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.info('Listening on port %s.', port)
  }
})
