const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.get('/', async (request, response) => {
    const url = 'www.somefakeurl.com/restaurantdetails' // this raise an error in your terminal
    const restaurants = await axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error)
        })

    response.send(restaurants)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})