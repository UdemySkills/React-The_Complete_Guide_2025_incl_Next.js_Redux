import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./Components/Header/Header.jsx"; // export without default in the component {} ARE MANDATORY
import CoreConcept from "./Components/CoreConcept.jsx"; // export WITH Default in component {}s SHOULD NOT BE USED
import TabButton from "./Components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log("AppComponent executed");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

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
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
