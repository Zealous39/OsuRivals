import {pool} from '../database.js'

export const createUser = async (User_id, User, Rank, PP) =>
{
    const result = await pool.query(`
    INSERT INTO users (user_id, username, \`rank\`, pp)
    VALUES (?, ?, ?, ?)
    `, [User_id, User, Rank, PP])
    return result
}

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



export const getAllUsers = async () =>{
    const result = await pool.query(`SELECT * FROM users`)
    return result
}


export const getUserByName = async (User) => {
    const result = await pool.query(`
        SELECT *
        FROM users
        WHERE username = ?`, [User])
    return result
}

export const getUserById = async (User_id) => {
    const result = await pool.query(`
        SELECT *
        FROM users
        WHERE user_ud = ?`, [User_id])
    return result
}

// export const updateUserbyName = async(User) =>{
//   return 
// }

//export const deleteUser = async() =>{
// return 
// }