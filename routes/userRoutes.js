import express from 'express';
import userController from '../controllers/userController';

const Router = express.Router();

Router.get('/', userController.getAll);
Router.post('/', userController.createOne);

export default Router;
