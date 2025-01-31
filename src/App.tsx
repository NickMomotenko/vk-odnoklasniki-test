import { ButtonWithCounter } from "./compound/ButtonWithCounter";

import { Button } from "./components/Button";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="app">
      {/* <ButtonWithCounter view="secondary" size={28}>
        <Button>
          <Counter />
        </Button>
      </ButtonWithCounter> */}
      {/* <Counter size={24} />
      <Counter size={20} />
      <Counter size={16} />
      <Counter size={12} />
      <Counter size={8} />
      <Counter size={8} stroke />
      <Counter value={3} />
      <Counter value={111} />
      <Counter pulse size={12} />
      <Counter view="secondary" size={12} pulse /> */}
      <Button />
      <Button size={28} />
      <Button size={56} view="secondary" />
    </div>
  );
};
