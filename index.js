const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('Frontend'));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/load', (req, res) => {
    res.send(TEST_DATA);
})

app.post('/post', (req, res) => {
    
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//--------------------------------------

var TEST_DATA = {
    locations: [
        {
            name: "Stevenson Event Center",
            loc: {
                lat: 36.996980, 
                lng: -122.052262
            },
            data: [
                {
                    time: Date.now(),
                    uv: 69
                },
                {
                    time: Date.now(),
                    uv: 80
                },
                {
                    time: Date.now(),
                    uv: 21
                },
                {
                    time: Date.now(),
                    uv: 30
                },
                {
                    time: Date.now(),
                    uv: 42
                },
            ]
        },
        {
            name: "Santa Cruz Boardwalk",
            loc: {
                lat: 36.964144, 
                lng: -122.018427
            },
            data: [
                {
                    time: Date.now(),
                    uv: 69
                },
                {
                    time: Date.now(),
                    uv: 80
                },
                {
                    time: Date.now(),
                    uv: 21
                },
                {
                    time: Date.now(),
                    uv: 30
                },
                {
                    time: Date.now(),
                    uv: 42
                },
            ]
        },
        {
            name: "San Jose",
            loc: {
                lat: 37.339336,
                lng: -121.899717
            },
            data: [
                {
                    time: Date.now(),
                    uv: 69
                },
                {
                    time: Date.now(),
                    uv: 80
                },
                {
                    time: Date.now(),
                    uv: 21
                },
                {
                    time: Date.now(),
                    uv: 30
                },
                {
                    time: Date.now(),
                    uv: 42
                },
            ]
        },
    ]
}