const request = require('request')

const url='http://api.weatherstack.com/current?access_key=ee05c68952b9e6e058b0958eb74eca61&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response)=>{
    // const data=JSON.parse(response.body)
    // console.log(response.body.current)
    
    console.log('It is currently '+ response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike + ' degrees out.')
})

 
