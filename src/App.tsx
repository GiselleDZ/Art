import NavBar from "./Components/NavBar";
import MainRouter from "./Router/MainRouter";
import ThemeComponent from "./ThemeComponent";

function App() {
  return (
    <ThemeComponent>
      <NavBar />
      <MainRouter />
    </ThemeComponent>
  );
}

export default App;
