import Header from "./components/header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MENU_LIST } from "./components/constants.js";
import { FOOTER_MENU_LIST } from "./components/constants.js";
import Footer from "./components/footer/Footer.js";
import NotFound from "./components/pages/NotFound.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {MENU_LIST.map((item) => {
            return <Route exact path={item.link} element={item.element} />;
          })}
          {FOOTER_MENU_LIST.map((item) => {
            return item.list.map((subelement) => {
              return (
                <Route
                  exact
                  path={subelement.link}
                  element={subelement.element}
                />
              );
            });
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
