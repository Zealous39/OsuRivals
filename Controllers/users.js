import {pool} from '../database.js';

export const createData = async (User_id, User, Rank, PP) =>
{
    const result = await pool.query(`
    INSERT INTO users (user_id, username, \`rank\`, pp)
    VALUES (?, ?, ?, ?)
    `, [User_id, User, Rank, PP])
    return result
}