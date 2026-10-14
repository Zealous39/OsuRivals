import { getLegacyUserData } from '../osu_api.js';
import * as UserModel from '../models/users.js'


export const searchUser = async (req, res) =>{
    const username = req.body.username;
    const search = await UserModel.getUserByName(username)
    if (search[0].length === 0){
        const userData = await getLegacyUserData(username);
        const {User_id, User , Rank, PP} = userData
        await UserModel.createUser(User_id, User, Rank, PP)
        res.json(userData);
    }
    else{
        res.json(search[0])
    }
}

export const getAllUsers = async(req, res) => {
    const results = await UserModel.getAllUsers()
    res.json(results[0])
}

