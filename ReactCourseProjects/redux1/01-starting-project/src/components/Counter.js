import classes from './Counter.module.css';
import { useSelector,useDispatch, connect } from 'react-redux';
import { counterAction } from './store';
// import { Component } from 'react';
const Counter = () => {
    
  const counter=useSelector(state=>state.counter.counter)
  const toggle=useSelector(state=>state.counter.toggle)
  const dispatch=useDispatch()
  
  const decrementHandler=()=>{
    dispatch(counterAction.decrement())
  }
  const incrementHandler=()=>{
    dispatch(counterAction.increment())
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toogler())
  };
  
  const increaseHandler=()=>{
    dispatch(counterAction.increase(10))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle &&<><div className={classes.value}>{counter}</div>
      <div>
      <button onClick={decrementHandler}>decrease Counter</button>
      <button onClick={incrementHandler}>increase Counter</button>
      <button onClick={increaseHandler}>increase Counter by 10</button>
      </div></>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


// class Counter extends Component{
//   toggleCounterHandler=()=>{
//      this.props.toggler()
//   }
//   decrementHandler=()=>{
//      this.props.decrement()
//   }
//   incrementHandler=()=>{
//     this.props.increment()
//   }
//   render(){
//     console.log(this.props.toggle)
//      return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {this.props.toggle &&<><div className={classes.value}>{this.props.counter}</div>
//       <div>
//       <button onClick={this.decrementHandler}>decrease Counter</button>
//       <button onClick={this.incrementHandler}>increase Counter</button>
//       </div></>}
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//      )
//   }
// }
// const stateProps=(state)=>{
//   return{
//      counter:state.counter,
//      toggle:state.toggle
//   }

// }
// const dispatchProps=(dispatch)=>{
//   return{
//      increment:()=>{dispatch({type:"increment"})},
//      decrement:()=>{dispatch({type:"decrement"})},
//      toggler:()=>{dispatch({type:"toggle"})},
//   }
// }
export default Counter;
