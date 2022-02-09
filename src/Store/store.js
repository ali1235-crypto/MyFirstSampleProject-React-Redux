import {createStore,combineReducers} from 'redux'
import cartReducer from './reducers/index'
import throttle from 'lodash.throttle'

function loadState(){
    try{
        const state=localStorage.getItem('cart')
        if(state!==null)return JSON.parse(state)
    }
    catch(e){
        // ignore errors
    }
    return {
        cart:[]
    }
}

function saveState(state){
    localStorage.setItem('cart',JSON.stringify(state))
}

const appReducers=combineReducers({
    cart:cartReducer
})

const store=createStore(appReducers,loadState())
store.subscribe(throttle(()=>{saveState(store.getState())}))
export default store

