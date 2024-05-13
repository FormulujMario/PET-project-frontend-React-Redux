import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/pages/Home.js";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
