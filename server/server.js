import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';
import applicationRoutes from './routes/applicationRoutes';

dotenv.config();


const app=express();
const PORT=process.env.PORT || 3000;
const dbURL=process.env.dbURL || 'mongodb://localhost:27012/placementapp';

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); 
    }
  };

connectDB();
app.use(cors());
app.use(bodyParser);

app.get("/api/user",userRoutes);
app.get("/api/jobs",jobsRoutes);
app.get("/api/appliations",applicationRoutes);





app.listen(PORT,(req,res)=>{
    console.log(`The server/backend is running on Port:${PORT}`);
})