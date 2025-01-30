import { createContext } from "react";

import { Button } from "../components/Button";
import { Counter } from "./../components/Counter/index";

type ButtonWithCounterContext = {
  children: React.ReactNode;
};

const ButtonWithCounterContext = createContext<
  ButtonWithCounterContext | undefined
>(undefined);

export const ButtonWithCounter = ({ children }) => {
  return (
    <ButtonWithCounterContext.Provider value={{}}>
      {children}
    </ButtonWithCounterContext.Provider>
  );
};

ButtonWithCounter.Button = Button;
ButtonWithCounter.Counter = Counter;
