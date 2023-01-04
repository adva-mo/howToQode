import "./App.css";
import RoutesIndex from "./components/RoutesIndex/RoutesIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Chat from "./components/Chat/Chat";
import { useLocalStorage } from "./hooks/useLocalStorage";
import currentLoggedUser from "./context/loggedUserContext";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import useWindowSize from "./hooks/useWindowSize";
import errorCtx from "./context/error.context";
import Error from "./components/error/Error";

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("QODE_APP", false);
  // const [toggleUpdate, setToggleUpdate] = useState(false);
  const [error, setError] = useState(false);

  const size = useWindowSize();
  return (
    <div className="App">
      <currentLoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
        {size.width < 800 ? <SideBar /> : <Navbar />}
        <div className="split-component">
          <errorCtx.Provider value={{ error, setError }}>
            {error && <Error msg={error} setError={setError} />}
            <RoutesIndex />
          </errorCtx.Provider>
          <Chat />
        </div>
      </currentLoggedUser.Provider>
    </div>
  );
}

export default App;
