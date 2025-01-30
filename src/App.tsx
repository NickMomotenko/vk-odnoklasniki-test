import { ButtonWithCounter } from "./compound/ButtonWithCounter";

export const App = () => {
  return (
    <div className="app">
      <ButtonWithCounter>
        <ButtonWithCounter.Button size={56}>
          <ButtonWithCounter.Counter />
        </ButtonWithCounter.Button>
      </ButtonWithCounter>
      <ButtonWithCounter>
        <ButtonWithCounter.Button size={56} view="secondary">
          <ButtonWithCounter.Counter />
        </ButtonWithCounter.Button>
      </ButtonWithCounter>
    </div>
  );
};
