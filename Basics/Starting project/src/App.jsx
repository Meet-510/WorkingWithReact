import Examples from "./components/Examples";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
