import "./App.css";
import RoutesIndex from "./components/RoutesIndex/RoutesIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Chat from "./components/Chat/Chat";
// import AI from "./components/AI/AI";
import { useLocalStorage } from "./hooks/useLocalStorage";
import currentLoggedUser from "./context/loggedUserContext";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import useWindowSize from "./hooks/useWindowSize";
// impoer useWindowSiz

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("QODE_APP", false);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const size = useWindowSize();
  return (
    <div className="App">
      <currentLoggedUser.Provider
        value={{ loggedUser, setLoggedUser, setToggleUpdate, toggleUpdate }}
      >
        {/* <Navbar /> */}
        {size.width < 800 ? <SideBar /> : <Navbar />}
        <div className="split-component">
          {/* <SideBar /> */}
          <RoutesIndex />
          <Chat />
        </div>
      </currentLoggedUser.Provider>
    </div>
  );
}

export default App;
