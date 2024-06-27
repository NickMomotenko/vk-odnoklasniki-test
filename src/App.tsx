import { Button } from "./components/Button";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="app">
      <Counter size={16}>1</Counter>
      <Counter size={16}>101</Counter>
      <Button size={28} />
      <Button size={36} />
      <Button size={56} />
    </div>
  );
};
