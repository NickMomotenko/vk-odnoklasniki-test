import { createContext, useContext, useState } from "react";

import { Button } from "../components/Button";
import { Counter } from "./../components/Counter/index";
import React from "react";

type ButtonWithCounterContext = {
  isLoading?: boolean;
  setIsloading?: any;
  view?: string;
};

const ButtonWithCounterContext = createContext<
  ButtonWithCounterContext | undefined
>(undefined);

export const ButtonWithCounter = ({ children, view }: any) => {
  const [isLoading, setIsloading] = useState(false);
  const [counterValue, setCounterValue] = useState(1);

  return (
    <ButtonWithCounterContext.Provider
      value={{ isLoading, setIsloading, view }}
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
