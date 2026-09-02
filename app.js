import express from 'express';
import {pool} from './database.js';
import {userRouter} from './routes/users.js'
const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/users', userRouter);


const PORT = 3000;

try{
    pool;
    console.log('connected to the database...')
}
catch(error){
    console.log(error)
}

app.listen(3000, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})