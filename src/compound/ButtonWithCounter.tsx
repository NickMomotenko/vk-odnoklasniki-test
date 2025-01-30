import { createContext, useContext, useState } from "react";

import { Button } from "../components/Button";
import { Counter } from "./../components/Counter/index";

type ButtonWithCounterContext = {
  isLoading?: boolean;
  setIsloading?: any;
};

const ButtonWithCounterContext = createContext<
  ButtonWithCounterContext | undefined
>(undefined);

export const ButtonWithCounter = ({ children }: any) => {
  const [isLoading, setIsloading] = useState(false);
  const [counterValue, setCounterValue] = useState(1);

  return (
    <ButtonWithCounterContext.Provider value={{ isLoading, setIsloading }}>
      {children}
    </ButtonWithCounterContext.Provider>
  );
};

export const useButtonWithCounterContext = () => {
  const context = useContext(ButtonWithCounterContext);

  if (!context) return;

  return context;
};

ButtonWithCounter.Button = Button;
ButtonWithCounter.Counter = Counter;
