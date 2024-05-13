import "./App.css";
import Header from "./components/header/Header.js";
import PageTitle from './components/PageTitle.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <PageTitle title='CRAFT BREWERY' />
      </main>
    </div>
  );
}

export default App;
