// importing library 

import { initializeApp, cert, getApps } from 'firebase-admin/app' // this is going to last for a limited time // APIs run for an extended period of time some for over 15 years 

import { getFirestore } from 'firebase-admin/firestore'

// importing credentials 
import {credentials} from '../credentials.js' 

// putting the same code as last time even though we have to change it 
    // this is connecting it to the firebase project 
    initializeApp({ 
        credential : cert(credentials) 
    })

    //connecting to the database in firestore
    const db = getFirestore()
    // you would be connecting to the project multiple times which would result in an error 


    export function dbConnect () {
        if (!getApps().length) { //if not connected // if the array for getApps DOES NOT (!) have an array length then it initializes the app // or the array length is false (or equal to 0) it is empty // firestore gives us a tool called getApps that looks at the project you are connected to a list all the apps you are connected to and returns it in an array. 
            initializeApp ({ 
            credential : cert(credentials) 
            })
        } 
        return getFirestore()
    }

