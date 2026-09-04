export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`mx-auto w-[92%] max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
}