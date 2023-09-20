export default function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        marginRight: "5px",
      }}
      onClick={onClick}
    />
  );
}
