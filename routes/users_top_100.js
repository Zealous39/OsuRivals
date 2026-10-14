import express from 'express';
import * as Controller from '../controllers/users_top_100.js'

export const scoreRouter = express.Router();

scoreRouter.route('/').get(Controller.getTopScores)
scoreRouter.route('/getSharedSongs').get(Controller.getSharedSongs)
scoreRouter.route(`/createTop100`).post(Controller.createUserTop100)