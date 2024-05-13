import "./App.css";
import Header from "./components/header/Header.js";
import PageTitle from "./components/PageTitle.js";
import MySlider from "./components/slider/Slider.js";
import Bestsellers from "./components/bestsellers/Bestsellers.js";
import LinkToAboutUs from "./components/link-to-about-us/LinkToAboutUs.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PageTitle title="CRAFT BREWERY" />
        <MySlider />
        <Bestsellers />
        <LinkToAboutUs />
      </main>
    </div>
  );
}

export default App;
