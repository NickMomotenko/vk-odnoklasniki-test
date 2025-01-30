import { ButtonWithCounter } from "./compound/ButtonWithCounter";

export const App = () => {
  return (
    <div className="app">
      <ButtonWithCounter>
        <ButtonWithCounter.Counter />
      </ButtonWithCounter>
    </div>
  );
};
