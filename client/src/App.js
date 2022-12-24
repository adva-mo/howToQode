import "./App.css";
import RoutesIndex from "./components/RoutesIndex/RoutesIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Chat from "./components/Chat/Chat";
import AI from "./components/AI/AI";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="split-component">
        <RoutesIndex />

        <Chat />
      </div>
      {/* <AI /> */}
    </div>
  );
}

export default App;
