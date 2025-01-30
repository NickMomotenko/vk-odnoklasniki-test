import { forwardRef, useEffect } from "react";

import { useCounter } from "../../hooks/useCounter";

import { CounterProps } from "./types";

import "./styles.scss";

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
  ({
    value = 1,
    size = 24,
    view = "primary",
    stroke = false,
    pulse = false,
  }) => {
    const {
      counterBody,
      counterValue,
      isCounterValueHidden,
      isSingleSymbol,
      setCounterSize,
      setCounterView,
      setCounterStroke,
      setCounterAnimation,
    } = useCounter({ value, size, view, stroke, pulse });

    useEffect(() => {
      if (counterBody.current) {
        setCounterSize();
        setCounterView();
        setCounterStroke();
        setCounterAnimation();
      }
    }, [size, view, stroke, value]);

    return (
      <div className="counter" ref={counterBody}>
        {!isCounterValueHidden && (
          <span className="counter__value" ref={counterValue}>
            {isSingleSymbol && value}
            {Number(value) > 99 && "99+"}
          </span>
        )}
      </div>
    );
  }
);
