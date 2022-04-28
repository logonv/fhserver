const express = require('express')
const axios = require('axios');


const app = express()
var cors = require('cors')
const port = 4000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log('get sent')
  res.send('Hello World!')
})

app.get('/appleResults', async (req, res) => {
    // const results = await fetch(
    //     "https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json", 
    //     // {mode: 'no-cors'}
    // );
    // console.log(results);
    // const data = await results.json();
    // console.log(data);
    // res.send(data);

    axios.get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json")
    .then(resp => {
        console.log(resp.data)
        const a = JSON.stringify(resp.data)
        console.log(a)
        res.send(a)
    })
    
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

