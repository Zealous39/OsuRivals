import { getLegacyUserData } from '../osu_api.js';
import * as UserModel from '../models/users.js'


export const searchUser = async (req, res) =>{
    const username = req.body.username;
    const userData = await getLegacyUserData(username);
    const {User_id, User , Rank, PP} = userData
    await UserModel.createUser(User_id, User, Rank, PP)
    res.json(userData);
}

export const getAllUsers = async(req, res) => {
    const results = await UserModel.getAllUsers()
    res.json(results[0])
}

