import {createStore} from 'redux';

let initialState = {
    principales: []
}

const reducerPeliculas = (state=initialState,action)=>{
    if(action.type==="CAMBIAR_PRINCIPALES"){
        return({
            ...state,
            principales:action.principales
        })
    }

    return state
}

export default createStore(reducerPeliculas)