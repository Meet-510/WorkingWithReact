import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.js";
import CoreConcept from "./components/CoreConcept.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
