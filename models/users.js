import {pool} from '../database.js'

export const createUser = async (User_id, User, Rank, PP) =>
{
    const result = await pool.query(`
    INSERT INTO users (user_id, username, \`rank\`, pp)
    VALUES (?, ?, ?, ?)
    `, [User_id, User, Rank, PP])
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