import css from "./App.module.scss";

export default function App() {
  const sentence = `Sunrise, parabellum.`;

  return (
    <div className={css.app}>
      <div data-text-preset="1">{sentence}</div>
      <div data-text-preset="2">{sentence}</div>
      <div data-text-preset="3">{sentence}</div>
      <div data-text-preset="4">{sentence}</div>
      <div data-text-preset="4-bold">{sentence}</div>
      <div data-text-preset="5">{sentence}</div>
    </div>
  );
}
