import { useRef } from "react";

import { sizes } from "../components/Counter/helper";
import { sizes as buttonSizes } from "../components/Button/helper";
import { CounterProps } from "../components/Counter/types";

export const useCounter = ({
  value,
  size,
  view,
  stroke,
  pulse,
}: CounterProps) => {
  const counterBody = useRef<HTMLDivElement | any>(null);
  const counterValue = useRef<any>();

  const isCounterValueHidden = size === 12 || size === 8;
  const isSingleSymbol = value && value.toString().length === 1;

  const setCounterSize = ({ buttonSize }) => {
    size = buttonSize ? buttonSizes[buttonSize]?.counterSize : size;

    if (sizes[size]) {
      Object.assign(counterBody.current.style, {
        width: `${size}px`,
        height: `${size}px`,
      });

      Object.assign(counterBody.current.style, {
        height: `${size}px`,
        width: !isSingleSymbol ? "auto" : `${size}px`,
        minWidth: isSingleSymbol ? "auto" : `${size}px`,
        padding: `0 ${sizes[size]?.horPadding}px`,
      });

      if (counterValue.current)
        counterValue.current.style.fontSize = `${sizes[size]?.fontSize}px`;
    }
  };

  const setCounterView = ({ buttonView }) => {
    if (
      buttonView &&
      (buttonView === "primary" || buttonView === "secondary")
    ) {
      if (buttonView === "primary") {
        counterBody.current.style.background = "rgba(255, 255, 255, 0.12)";

        if (counterValue.current) counterValue.current.style.color = "#fff";

        return;
      }

      if (buttonView === "secondary") {
        counterBody.current.style.background = "rgba(131, 102, 86, 0.12)";
        if (counterValue.current) counterValue.current.style.color = "#2E2F33";

        return;
      }
    }

    if (view === "primary") {
      counterBody.current.style.background = "#2fb675";
      counterBody.current.style.setProperty("--pulseColor", "#2fb675");
      if (counterValue.current) counterValue.current.style.color = "#fff";
    }

    if (view === "secondary") {
      counterBody.current.style.background = "rgba(131,102,86, 0.12)";
      counterBody.current.style.setProperty(
        "--pulseColor",
        "rgba(131, 102, 86, 0.12)"
      );
      if (counterValue.current) counterValue.current.style.color = "#2E2F33";
    }
  };

  const setCounterStroke = () => {
    if (stroke) {
      counterBody.current.style.outline = `${sizes[size]?.strokeWidth}px solid`;
    }
  };

  const setCounterAnimation = () => {
    if (pulse && (size === 12 || size === 8)) {
      counterBody.current.classList.add("counter--animation");
    } else {
      counterBody.current.classList.remove("counter--animation");
    }
  };

  return {
    counterBody,
    counterValue,
    setCounterSize,
    setCounterView,
    setCounterStroke,
    setCounterAnimation,
    isCounterValueHidden,
    isSingleSymbol,
  };
};
