import {Request, Response} from 'express';
import {UserValidate} from '../RequestValidate/UserValidate';
import User from '../Models/User';

class UserController {
   
   async getAllUsers(request: Request, response: Response) {
      try {
         const users = await User.find();
         return response.status(200).json({success: true, data: users})
      } catch (error) {
         return response.status(500).json({
            success: false,
            error: error.message
         })
      }
   }

   async create(request: Request, response: Response) {
      
      try {
         const {nickName,name, email, data_aniversario} = request.body;
         
         UserValidate({nickName,name,email, data_aniversario});
         const existingUser = await User.find({email: email});
         
         if (existingUser.length)
            throw new Error('Usuário ja existente!')

         const user = await User.create({nickName,name,email,data_aniversario});
         
         return response.status(201).json({user});    
         
      } catch (error) {
         return response.status(500).json({
            error: error.message,
            msg: 'Registration Failed'
         })   
      }
   }

   async getUsersInRoom () {

   }

}

export default UserController;