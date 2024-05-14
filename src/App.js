import "./App.css";
import React from "react";
import MyRouter from "./components/MyRouter.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <MyRouter />
      </Provider>
    </div>
  );
}

export default App;
