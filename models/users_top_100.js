import {pool} from '../db/database.js';


export const createUserTop100 = async (userData2) =>
{
    const top100 = userData2.slice(0,50);

    if (top100.length === 0) return;

    const values = top100.map((u) => [
        u.user_id,
        u.beatmap_id,
        u.pp
    ]);

    const result = await pool.query(`
        INSERT INTO users_top_100 (user_id, beatmap_id, pp)
        VALUES ?`, [values])
        return result
}

export const getAllTopScores = async ()=>{
    const result = await pool.query(`SELECT * FROM users_top_100`)
    return result
}

export const getTopScoresByID = async (User_id) => {
    const result = await pool.query(`
        SELECT *
        FROM users_top_100
        WHERE user_id = ?`, [User_id]);
    return result
}
