import classes from './Header.module.css';
import { authActions } from './store';
import { useSelector,useDispatch } from 'react-redux';
const Header = () => {

  const authenticated=useSelector(state=>state.auth.isAuthenticated)
  const dispatch=useDispatch()

  const logout=()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {authenticated && <button onClick={logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
