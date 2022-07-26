import express from 'express'

const app = express() // express is an http server and we are intializing it here // 
const PORT = 3002 // random port number 
app.use(express.json()) // we are telling express to respond in spanish 

// put our routes here
app.get('/',(req, res) => {
    res.send('Express is working!')
}) // this is responding to the request

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`) // we do this so that we know that our program is not frozen it is now listening // you do this in backticks 
}) // this is a basic api and it is not responding to any request 

