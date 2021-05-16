import {createStore} from 'redux';


const inticial_state = 
   {
      ativo: true,
      nickName: "Suzana Jhonson",
      nome: "",
      email: "",
      chave_unica:"",
      data_aniversario: "",
      finalyRegister: true
   }

function reducer(state = inticial_state , action) {
   console.log(action);
   if (action.type === 'SET_USER') {
      return { 
         ...state,
         ativo: action.ativo,
         nickName: action.nickName,
         finalyRegister: action.finalyRegister
      }
   }
   return state
}

const store = createStore(reducer);


export default store;