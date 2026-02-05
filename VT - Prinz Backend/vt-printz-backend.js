// Importing required modules form external packages
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importing required modules from local files
import connectMongoDB from './connect-mongodb.js';
import cloudinaryConnect from './connect-cloudinary.js';

import path from 'path';

const vtPrintzBackend = express();
const Port = process.env.PORT;

// Applying middleware to the server
vtPrintzBackend.use(cors({
    origin: [ 
        'http://localhost:4011',    
    ], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'params'],
    credentials: true }));
vtPrintzBackend.use(cookieParser());
vtPrintzBackend.use(express.json());
vtPrintzBackend.use(express.urlencoded({ extended: true }));


main()
async function main(){ 
    connectMongoDB();
    cloudinaryConnect();
}

vtPrintzBackend.listen(Port, () =>{ 
    console.log(`VT Printz server is running on Port number ${Port}`) 
});

vtPrintzBackend.get('/', ( req, res ) =>{ 
    console.log("This is the backend server route of vt printz web application");
    res.status(200).json("This is the backend server route of vt printz web application");
})