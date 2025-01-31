import { createContext, useContext, useState } from "react";

import React from "react";

type ButtonWithCounterContext = {
  isLoading?: boolean;
  setIsloading?: any;
  view?: string;
  counterValue?: number;
};

const ButtonWithCounterContext = createContext<
  ButtonWithCounterContext | undefined
>(undefined);

export const ButtonWithCounter = ({ children, ...rest }: any) => {
  const [isLoading, setIsloading] = useState(false);
  const [counterValue, setCounterValue] = useState(1);

  return (
    <ButtonWithCounterContext.Provider
      value={{ isLoading, setIsloading, counterValue, ...rest }}
    >
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </ButtonWithCounterContext.Provider>
  );
};

export const useButtonWithCounterContext = () => {
  const context = useContext(ButtonWithCounterContext);

  if (!context) return;

  return context;
};
