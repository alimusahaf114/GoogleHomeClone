import "./App.css";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
import Shortcut from "./Components/Shortcut";

function App() {
  return (
    <>
      <Header></Header>
      <br />
      <center>
        <Logo></Logo>
        <Search />
        <Shortcut />
      </center>
    </>
  );
}

export default App;
