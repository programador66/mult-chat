import IUsers from '../Interfaces/IUsers';

export const UserValidate = ({nickName,name, email, data_aniversario}: IUsers) => {
   if (!nickName || !name || !email || !data_aniversario) {
      throw new Error ('Favor verificar os parametros!');
   }
   return true;
}