import classes from "./Carousel.module.scss";

export default function CarouselNavigationButton({
  onClick,
  customClass,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className={`${customClass} ${classes.carousel_navigation_button}`}
    >
      {icon}
    </button>
  );
}
