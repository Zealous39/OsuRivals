import express from 'express';
import {getLegacyUserData} from './osu_api.js'
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(express.json());


app.post('/search-user', async (req,res) => {
    const username = req.body.username;
    const userData = await getLegacyUserData(username)
    res.json(userData)
})

const PORT = 3000;
app.listen(3000, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})