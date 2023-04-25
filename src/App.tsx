import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import MainRouter from "./Router/MainRouter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRouter />
    </div>
  );
}

export default App;
