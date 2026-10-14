import * as TopModel from '../models/users_top_100.js';

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

