import express from 'express';
import {getLegacyUserData} from './osu_api.js'
import {pool} from './database.js';
import {createData} from './Controllers/users.js'
const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(express.json());


app.post('/search-user', async (req,res) => {
    const username = req.body.username;
    const userData = await getLegacyUserData(username);
    const {User_id, User , Rank, PP} = userData
    await createData(User_id, User, Rank, PP);
    res.json(userData);
})

app.get('/api/v1/users/GetAllUsers/', async (req, res) =>{
    const results = await pool.query('SELECT * FROM users')
    res.json(results[0])
})

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