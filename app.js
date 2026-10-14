import express from 'express';
import {pool} from './db/database.js';
import {userRouter} from './routes/users.js'
import {scoreRouter} from './routes/users_top_100.js';
const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/topscores', scoreRouter)


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