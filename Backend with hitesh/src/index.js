import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import connectDB from './db/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

connectDB()
const app = express()
app.use(cors({
     origin: `${process.env.DB_ORIGIN}`,
     credentials: true,
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
     extended: true,
     limit: "16kb"
}))
app.use(express.static("public"))           //this serves static files like pdf, images from the public directory
app.use(cookieParser())

// import routes
import userRouter from './routes/user.router.js';
import videoRouter from './routes/video.router.js';

app.use('/api/v1/user', userRouter);
app.use('/api/v1/video', videoRouter);

app.listen(process.env.PORT, () => {
     console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})

export { app }