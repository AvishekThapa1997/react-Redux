import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/authStore";
import { useDispatch } from "react-redux";
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    dispatch(authActions.logout());
  }
  const navContent = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth.authState && navContent}
    </header>
  );
};

export default Header;
