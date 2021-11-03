import classes from './Auth.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authStore';
const Auth = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (email.trim().length > 0 && password.trim().length > 0) {
      dispatch(authActions.login());
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
