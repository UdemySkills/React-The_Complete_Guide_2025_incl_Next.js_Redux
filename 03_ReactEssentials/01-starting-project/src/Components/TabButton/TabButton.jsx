export default function TabButton(props) {
  const children = props.children;

  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
