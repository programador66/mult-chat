import express from 'express';
import UserController from './Controllers/UserController';

const routes = express.Router();
const userController =  new UserController();

routes.get("/", userController.getAllUsers);

export default routes;