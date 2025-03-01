export default function TabButton(props) {
  const children = props.children;

  function handleClick() {
    console.log("Hello Venky !!!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
