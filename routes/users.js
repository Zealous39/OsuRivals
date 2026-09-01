import express from 'express';
export const userRouter = express.Router();

import {getAllUsers, searchUser} from '../controllers/users.js';

userRouter.route('/getAllUsers').get(getAllUsers);
userRouter.route('/searchUser').post(searchUser)