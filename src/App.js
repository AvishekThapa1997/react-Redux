import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <Fragment>
      <Header />
      { auth.authState ? <UserProfile /> : <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
