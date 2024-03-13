import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
function App() {
  function handleClick() {
    console.log("HElloolololo");
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton onSelect={handleClick}>JSX</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
