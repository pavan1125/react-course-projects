import classes from './Auth.module.css';
import { authActions } from './store';
import Userprofile from "./UserProfile"
import { useSelector,useDispatch } from 'react-redux';
const Auth = () => {
 

  const authenticated=useSelector(state=>state.auth.isAuthenticated)
 const dispatch=useDispatch()
  const login=()=>{
    dispatch(authActions.login())
  }
 
  return (
    <>
    {!authenticated ?<main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          
          <button onClick={login}>Login</button>
        </form>
      </section>
    </main>:
      <Userprofile />}
    </>
  );
};

export default Auth;
