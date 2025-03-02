export default function TabButton(props) {
  const children = props.children;
  const isSelected = props.isSelected;
  const handleClick = props.onSelect;

  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
