import express from 'express';

import mongoose from 'mongoose';
const app = express();
app.use(express.json())
import routes from './routes';

app.use('/api', routes)
mongoose.connect('mongodb+srv://pooja9877:poojaarora@cluster0.b0mbr8f.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(5000, () => console.log('listen on port 5000.'))).catch((error) => console.log("error occured", error))

