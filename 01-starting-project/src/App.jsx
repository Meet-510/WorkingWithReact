import CoreConcepts from "./components/CoreConcepts.js";
import Header from "./components/Header/Header.js";
import Examples from "./components/Examples.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
