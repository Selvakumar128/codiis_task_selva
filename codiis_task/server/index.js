import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import User from "./routes/User.js";
import mongoose from "mongoose";
import formidable from "formidable";
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/codiis-Task')

  .then(() => console.log(' MongoDB database Connected ...'))

  .catch(err => console.error('Could not connect to MongoDB...'));

app.use('/api/user',User)

app.listen(4000, () => {
console.log(`Server is up and running on 4000 ...`);
});

