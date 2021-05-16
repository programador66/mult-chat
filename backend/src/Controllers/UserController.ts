import {Request, Response} from 'express';

class UserController {

   async index(request: Request, response: Response) {
      try {
         return response.status(200).json({message: 'usuarios'})
      } catch (error) {
         return response.status(500).json({
            success: false,
            error: error.message
         })
      }
   }

}

export default UserController;