import "./NavigationButton.scss";

const NavigationButton = (props) => {
  return (
    <button
      onClick={props.onClickButton}
      className={`navigation_button ${props.class}`}
    >
      <span>{props.text}</span>
    </button>
  );
};
export default NavigationButton;
