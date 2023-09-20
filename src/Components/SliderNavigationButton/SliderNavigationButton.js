import "./SliderNavigationButton.scss";

const SliderNavigationButton = ({ icon, onClick, customClassName }) => {
  return (
    <button
      className={`${customClassName} slider_navigation_btn`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default SliderNavigationButton;
