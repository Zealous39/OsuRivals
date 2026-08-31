import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool
({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}).promise();


async function getRanks()
{
    const [rows] = await pool.query("SELECT user_id, `rank` FROM osu_player_data.osu_user_stats WHERE `rank` <= 100000 AND `rank` > 0")
    return rows
}

async function getRank(user_id)
{
    const [rows] = await pool.query(`
        SELECT *
        FROM osu_user_stats 
        WHERE user_id = ?
        `, [user_id])
        return rows
}

async function createData(user_id)
{
    const result = await pool.query(`
    INSERT INTO users (user_id)
    VALUES (?)
    `, [user_id])
    return result
}



//const ranks = await getRank(86427)

const result = await createData(10631294)
