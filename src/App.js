import "./App.css";
import Navigation from "./Navigation";
import Card from "./Card";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Card />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
