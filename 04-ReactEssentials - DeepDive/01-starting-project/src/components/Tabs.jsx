export default function Tabs({ children, buttons, ButtonsContainer }) {
  //const ButtonsContainer = buttonsContainer; // React understands that the set value would be used as a component

  return (
    <>
      {/*   React understands that you have the element type dynamic using props and constant mentioned above and behaves accordingly 
      React is even smart enough to understand if you are using built in element or custom component based on the props value.*/}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
