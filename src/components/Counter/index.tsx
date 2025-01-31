import { forwardRef, useEffect } from "react";

import { useCounter } from "../../hooks/useCounter";

import { CounterProps } from "./types";

import "./styles.scss";
import { useButtonWithCounterContext } from "../../compound/ButtonWithCounter";

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
  ({
    value = 1,
    size = 24,
    view = "primary",
    stroke = false,
    pulse = false,
  }) => {
    const context = useButtonWithCounterContext();

    const {
      counterBody,
      counterValue,
      isCounterValueHidden,
      isSingleSymbol,
      setCounterSize,
      setCounterView,
      setCounterStroke,
      setCounterAnimation,
    } = useCounter({
      value: context?.counterValue ? context?.counterValue : value,
      size,
      view,
      stroke,
      pulse,
    });

    useEffect(() => {
      if (counterBody.current) {
        setCounterSize({ buttonSize: context?.size });
        setCounterView({ buttonView: context?.view });
        setCounterStroke();
        setCounterAnimation();
      }
    }, [
      size,
      view,
      stroke,
      context?.counterValue ? context?.counterValue : value,
    ]);

    let renderedValue = context?.counterValue ? context?.counterValue : value;

    return (
      <div className="counter" ref={counterBody}>
        {!isCounterValueHidden && (
          <span className="counter__value" ref={counterValue}>
            {isSingleSymbol && renderedValue}
            {Number(renderedValue) > 99 && "99+"}
          </span>
        )}
      </div>
    );
  }
);
