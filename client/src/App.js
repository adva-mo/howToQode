import "./App.css";
import RoutesIndex from "./components/RoutesIndex/RoutesIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Chat from "./components/Chat/Chat";
// import AI from "./components/AI/AI";
import { useLocalStorage } from "./hooks/useLocalStorage";
import currentLoggedUser from "./context/loggedUserContext";

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("QODE_APP", false);

  return (
    <div className="App">
      <currentLoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
        <Navbar />
        <div className="split-component">
          <RoutesIndex />
          <Chat />
        </div>
      </currentLoggedUser.Provider>
    </div>
  );
}

export default App;
