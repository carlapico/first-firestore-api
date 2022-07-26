//connect to db: 
    // 1- install library

import express from 'express'
import { createCar, getAllCars } from './src/cars.js'

const app = express() // express is an http server and we are intializing it here // 
const PORT = 3002 // random port number 
app.use(express.json()) // we are telling express to respond in spanish 

//put our routes here
//setting up a route here // we are trying to get all data 
app.get('/cars', getAllCars) // we imported the function getAllCars from the src file 
app.post('/cars', createCar)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`) // we do this so that we know that our program is not frozen it is now listening // you do this in backticks because it has a template literal ${} 
}) // this is a basic api and it is not responding to any request 

// we installed nodemon (npm i -g nodemon) // now the port can see the live updated 

