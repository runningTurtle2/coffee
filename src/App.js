import "./Styling/App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="side-bar">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
