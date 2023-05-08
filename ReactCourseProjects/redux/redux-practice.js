const redux=require('redux')

const reducerFun=(state={counter:0},action)=>{
    if(action.type==="increment"){
        
        return{
            counter:state.counter+1
        };
    }
    if(action.type==="decrement"){
        return{
            counter:state.counter -1
        }
    }
    return state
}

const store =redux.createStore(reducerFun)

const component=()=>{
      let latest= store.getState()
       console.log(latest)
}
console.log(store.getState())
store.subscribe(component)

store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})