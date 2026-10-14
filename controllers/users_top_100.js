import * as TopModel from '../models/users_top_100.js';
import * as UserModel from '../models/users.js'
import { getLegacyUserDataTop100 } from '../services/osu_api.js';

export const getTopScores = async (req, res) => {
    if (Object.keys(req.query).length > 0){
        const user_id = req.query.id;
        const user_top = await TopModel.getTopScoresByID(user_id);
        res.json(user_top[0])
    }
    else{
        const result = await TopModel.getAllTopScores();
        res.json(result[0])
    }
}

export const createUserTop100 = async (req, res) => {
    if (Object.keys(req.query).length > 0){
        const username = req.query.username
        const userData = await getLegacyUserDataTop100(username)
        console.log(JSON.stringify(userData))
        await TopModel.createUserTop100(userData)
        res.send("Added maps")
    }
}

export const getSharedSongs = async (req,res) => {
    let names = req.query.name;
    if (!names){
        names = []
    }
    let user1 = '';
    let user2 = ''

    if (names.length === 2){
        user1 = await UserModel.getIdByName(names[0])
        user2 = await UserModel.getIdByName(names[1])
    }
    else{
        res.status(400).json({
            error: "Bad Request",
            message: "Invalid Query Params"
        })
    }
    const user1_id = user1[0][0].user_id
    const user2_id = user2[0][0].user_id

    const shared_songs = await TopModel.getSharedSongs(user1_id, user2_id)
    res.json(shared_songs[0])
}


