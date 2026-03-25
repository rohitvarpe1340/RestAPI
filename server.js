import express from 'express';
import dotenv from 'dotenv';
import userRoutes from'./routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express());
app.use(express.json());

const port = process.env.PORT;

app.use('/api',userRoutes);

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})
