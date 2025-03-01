export default function TabButton(props) {
  const children = props.children;
  const handleClick = props.onSelect;

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
