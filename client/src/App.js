import "./App.css";
import RoutesIndex from "./components/RoutesIndex/RoutesIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Chat from "./components/Chat/Chat";
import AI from "./components/AI/AI";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import currentLoggedUser from "./context/loggedUserContext";
// import { useState } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("QODE_APP", false);
  return (
    <div className="App">
      {loggedUser && console.log(loggedUser)}
      <Navbar />
      <div className="split-component">
        <RoutesIndex />

        <Chat />
      </div>
      <AI />
    </div>
  );
}

export default App;
