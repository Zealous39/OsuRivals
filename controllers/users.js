import {pool} from '../database.js';
import { getLegacyUserData } from '../osu_api.js';

const createUser = async (User_id, User, Rank, PP) =>
{
    const result = await pool.query(`
    INSERT INTO users (user_id, username, \`rank\`, pp)
    VALUES (?, ?, ?, ?)
    `, [User_id, User, Rank, PP])
    return result
}

export const searchUser = async (req, res) =>{
    const username = req.body.username;
    const userData = await getLegacyUserData(username);
    const {User_id, User , Rank, PP} = userData
    await createUser(User_id, User, Rank, PP);
    res.json(userData);
}

export const getAllUsers = async(req, res) => {
    const results = await pool.query('SELECT * FROM users')
    res.json(results[0])
}

