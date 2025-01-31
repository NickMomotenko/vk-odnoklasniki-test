import { ButtonWithCounter } from "./compound/ButtonWithCounter";

import { Button } from "./components/Button";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="app">
      <Button />
      <Counter />
      <ButtonWithCounter view="secondary">
        <Button size={28}>
          <Counter />
        </Button>
      </ButtonWithCounter>
    </div>
  );
};
