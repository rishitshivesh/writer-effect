import WriterEffect from "./WriterEffect";

export default function App(
  text = "",
  className = "",
  style = { fontSize: "2rem", fontWeight: "bold" },
  timeout = 50
) {
  return (
    <WriterEffect
      text={text}
      className={className}
      style={style}
      timeout={timeout}
    />
  );
}
