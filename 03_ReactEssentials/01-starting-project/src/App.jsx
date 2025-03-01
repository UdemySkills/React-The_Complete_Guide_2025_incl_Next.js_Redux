import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];
const description = reactDescription[genRandomInt(2)];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.src} alt="..."></img>
      <h3>{props.title}</h3>
      <p> {props.description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              src={componentsImg}
              title="Components"
              description="The Core UI building block."
            ></CoreConcept>
            <CoreConcept
              src={componentsImg}
              title=""
              description=""
            ></CoreConcept>
            <CoreConcept
              src={componentsImg}
              title=""
              description=""
            ></CoreConcept>
            <CoreConcept
              src={componentsImg}
              title=""
              description=""
            ></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
