import {createStore} from 'redux';


const inticial_state = 
   {
      ativo: true,
      nickName: "",
      nome: "",
      email: "",
      loginChat:false,
      data_aniversario: "",
      finalyRegister: false,
      room: ""
   }

function reducer(state = inticial_state , action) {
   console.log(action)
   if (action.type === 'SET_USER') {
      return { 
         ...state,
         ativo: action.ativo,
         nickName: action.nickName,
         loginChat:action.loginChat || false,
      }
   }else if (action.type === 'SET_USERFINAL') {
      return {
         ...state,
         finalyRegister: action.finalyRegister,
         nome: action.nome || "",
         email: action.email || "",
         data_nascimento: action.data_nascimento || "",
      }
   } else if (action.type === 'SET_ROOM') {
      return {
         ...state,
         room: action.room
      }
   } else if (action.type === 'CLOSE_MODALFINALY') {
      return {
         ...state,
         finalyRegister: action.finalyRegister,
         nome: "",
         email: ""
      }
   } else if (action.type === 'RESET') {
      return {
         ...state,
         ativo: true,
         nickName: "",
         nome: "",
         email: "",
         chave_unica:"",
         data_aniversario: "",
         finalyRegister: false,
         room: "",
         loginChat:false,
      }
   }
   return state
}

const store = createStore(reducer);


export default store;