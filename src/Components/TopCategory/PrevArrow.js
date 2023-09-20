export default function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "5px",
      }}
      onClick={onClick}
    />
  );
}
