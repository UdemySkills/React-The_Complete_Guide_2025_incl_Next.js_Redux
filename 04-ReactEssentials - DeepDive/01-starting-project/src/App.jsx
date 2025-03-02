import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    //  Alternate to use for Fragment is empty opne and close tags even called as shorthand Fragment tag
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
