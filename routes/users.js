import express from 'express';
import * as Controller from '../controllers/users.js';

export const userRouter = express.Router();

userRouter.route('/getAllUsers').get(Controller.getAllUsers);
userRouter.route('/searchUser').post(Controller.searchUser)