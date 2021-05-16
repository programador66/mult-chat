import {createStore} from 'redux';


const inticial_state = 
   {
      ativo: true,
      nickName: "",
      nome: "",
      email: "",
      chave_unica:"",
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
      }
   }else if (action.type === 'SET_USERFINAL') {
      return {
         ...state,
         finalyRegister: action.finalyRegister,
      }
   } else if (action.type === 'SET_ROOM') {
      return {
         ...state,
         room: action.room
      }
   }
   return state
}

const store = createStore(reducer);


export default store;