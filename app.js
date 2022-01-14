const express = require('express')
const app = express()

app.get('/names', (req, res) => {
    res.send('Matheus')
})
app.listen(5000, () => {
    console.log('Server is runing on port 5000')
})