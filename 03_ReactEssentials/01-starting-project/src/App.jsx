import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./Components/Header/Header.jsx"; // export without default in the component {} ARE MANDATORY
import CoreConcept from "./Components/CoreConcept.jsx"; // export WITH Default in component {}s SHOULD NOT BE USED
import TabButton from "./Components/TabButton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("Hello Venky !!! " + selectedTopic);
  }

  console.log("AppComponent executed");

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Component")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
