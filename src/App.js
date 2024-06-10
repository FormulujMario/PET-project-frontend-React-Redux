import "./scss/App.scss";
import scssVars from "./scss/App.scss";
import React from "react";
import MyRouter from "./components/MyRouter.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
       <ConfigProvider 
    theme={{
      cssVar : true,
      token: {
        colorPrimary: scssVars.defaultColor,
        colorPrimaryHover: scssVars.accentColor,
        boxShadow: 'none'
      },
      components: {
        Checkbox: {
          colorPrimary: scssVars.accentColor,
        },
      },
    }}
  >
      <Provider store={store}>
        <MyRouter />
      </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
