import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function coreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((items) => (
          <CoreConcept {...items} />
        ))}
      </ul>
    </section>
  );
}
