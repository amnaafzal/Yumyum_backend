import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import authRoutes from './routes/Auth.js';
import likeRecipeRoutes from './routes/likedRecipe.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())





// Connect to MongoDB
mongoose.connect(process.env.MONGO_ATLAS_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB Error:', err));




// Use the auth routes
app.use('/auth', authRoutes);
app.use('/likerecipe', likeRecipeRoutes )



const port = 5000
app.listen(port, () => {
  console.log(`server is live on ${port}`)
})