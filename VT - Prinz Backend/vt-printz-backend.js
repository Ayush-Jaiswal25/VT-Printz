// // Importing required modules form external packages
// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';

// // Importing required modules from local files
// import connectMongoDB from './connect-mongodb.js';
// import cloudinaryConnect from './connect-cloudinary.js';

// import feedbackRoutes from "./routes/feedback.routes.js";

// import path from 'path';

// const vtPrintzBackend = express();
// const Port = process.env.PORT;

// // Applying middleware to the server
// vtPrintzBackend.use(cors({
//     origin: [ 
//         'http://localhost:4011',    
//     ], 
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'params'],
//     credentials: true }));
// vtPrintzBackend.use(cookieParser());
// vtPrintzBackend.use(express.json());
// vtPrintzBackend.use(express.urlencoded({ extended: true }));


// main()
// async function main(){ 
//     connectMongoDB();
//     cloudinaryConnect();
// }

// vtPrintzBackend.listen(Port, () =>{ 
//     console.log(`VT Printz server is running on Port number ${Port}`) 
// });

// vtPrintzBackend.get('/', ( req, res ) =>{ 
//     console.log("This is the backend server route of vt printz web application");
//     res.status(200).json("This is the backend server route of vt printz web application");
// })

// External packages
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

// Local imports
import connectMongoDB from './connect-mongodb.js';
import cloudinaryConnect from './connect-cloudinary.js';
import feedbackRoutes from './routes/feedback.routes.js';
import contactRoutes from './routes/contact.routes.js';
import productRoutes from './routes/product.routes.js';

const vtPrintzBackend = express();
const PORT = process.env.PORT || 5000;

// -------------------- MIDDLEWARE --------------------
vtPrintzBackend.use(
    cors({
        origin: [
            'http://localhost:4011', // frontend
            'http://localhost:4012',
            'http://localhost:5000',
            'http://localhost:5174',
            'http://localhost:5173', // admin (add correct port)
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true,
    })
);

vtPrintzBackend.use(cookieParser());
vtPrintzBackend.use(express.json());
vtPrintzBackend.use(express.urlencoded({ extended: true }));

// -------------------- ROUTES --------------------
vtPrintzBackend.use('/api/feedback', feedbackRoutes);
vtPrintzBackend.use('/api/contact', contactRoutes);
vtPrintzBackend.use('/api/catalog', productRoutes); // Prefixing all hierarchy routes with /api/catalog

vtPrintzBackend.get('/', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'VT Printz Backend is running',
    });
});

// -------------------- SERVER START --------------------
const startServer = async () => {
    try {
        await connectMongoDB();
        await cloudinaryConnect();

        vtPrintzBackend.listen(PORT, () => {
            console.log(`🚀 VT Printz server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server failed to start:', error);
        process.exit(1);
    }
};

startServer();
