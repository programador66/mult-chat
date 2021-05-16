import {Request, Response} from 'express';
import IUsers from '../Interfaces/IUsers';

const users:any = []

class UserController {
   
   async getAllUsers(request: Request, response: Response) {
      try {
         return response.status(200).json({message: 'usuarios'})
      } catch (error) {
         return response.status(500).json({
            success: false,
            error: error.message
         })
      }
   }

   async create({name, email,data_aniversario} : IUsers) {
      const cleanName = name.trim();
      const cleanEmail = email.trim().toLowerCase();

      const existingUser = users.find( (user: IUsers) => user.email === email)
      
      if (existingUser) 
         return {error: 'Usuário ja existe!'}
      
      const user = { name: cleanName, email: cleanEmail, data_aniversario};
      
      users.push(user);
      
      return {user};
   }

   async getUsersInRoom () {

   }

}

export default UserController;