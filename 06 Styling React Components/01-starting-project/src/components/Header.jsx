import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      <span
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        This is the inline Style
      </span>
    </header>
  );
}
