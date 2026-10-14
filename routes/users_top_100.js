import express from 'express';
import * as Controller from '../controllers/users_top_100.js'

export const scoreRouter = express.Router();

scoreRouter.route('/').get(Controller.getTopScores)