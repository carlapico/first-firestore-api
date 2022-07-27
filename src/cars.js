import { dbConnect } from "./dbConnect.js"; // you import this variable from the dbconnect file and have it globally scoped so that you can call for it in multiple functions 

export function getAllCars (req,res) {
    // connect to database 
    const db = dbConnect () // now any API point that need to connect will allow it to and will check if we are connected to project and connect to the database 
    // get all docs from cars collection (it will not be formatted as an array)
    db.collection('cars').get() // now this returns a promise 
        .then (collection => {
            // reshape collection to an array 
            const cars = collection.docs.map(doc => doc.data()) // this will return it in an array
            // send array to response
            res.send(cars) 
        })
        .catch(err => res.status(500).send(err)) // if you just console.log(err) then we will still be waiting for it if you do not send back an err (object)
}

// posting a car 
export function createCar (req, res) {
    //get a new car from request body
        const newCar = req.body //this won't work unless we added : app.use(express.json()) to the index file. 
    //connect to database
        const db = dbConnect()
    //add that car to cars collection
        db.collection('cars').add(newCar)
            .then(doc => {
                res.status(201).send({
                    success: true, 
                    id: doc.id   //send back new doc id 
                })
                })
            .catch(err => handleError(err,res)) 
}

function handleError (err,res) {
    console.log(err)
    res.status(500).send(err) //fairly typical on how we handle an err in firestore
}

export function updateCar (req,res) {
    const{ id } = req.params
    //connect to db 
    const db= dbConnect()
    //update doc(id) in cars collections using req.body 
    let patchCar = req.body
    db.collection('cars').doc(id).update(patchCar)
        .then(doc => {
            res.status(200).send({
                success:true,
                id: doc.id 
            })
        })
        .catch((err) => handleError(err,req))
    //connect to database
    //

}