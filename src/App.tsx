import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { ButtonWithCounter } from "./compound/ButtonWithCounter";

export const App = () => {
  return (
    <div className="app">
      <ButtonWithCounter size={28}>
        <Button>
          <Counter />
        </Button>
      </ButtonWithCounter>
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
    </div>
  );
};
