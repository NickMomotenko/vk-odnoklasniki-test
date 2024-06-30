import { forwardRef, useEffect, useRef } from "react";

import { sizes } from "./helper";

import "./styles.scss";

type CounterProps = {
  value?: number | string;
  size?: number;
  view?: "primary" | "secondary";
  stroke?: true | false;
  pulse?: true | false;
  children?: React.ReactNode;
};

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
  (
    { value, size = 24, view = "primary", stroke = false, pulse = false },
    ref
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const counterRef = ref || internalRef;
    const counterValueRef = useRef<any>();

    const isCounterValueHidden = size === 12 || size === 8;
    const isSingleSymbol = value && value.toString().length === 1;

    useEffect(() => {
      if (counterRef.current) {
        if (size) {
          counterRef.current.style.height = `${size}px`;

          if (!isSingleSymbol) {
            counterRef.current.style.width = `auto`;
            counterRef.current.style.minWidth = `${size}px`;
            counterRef.current.style.padding = `0 ${sizes[size]?.horPadding}px`;
          } else {
            counterRef.current.style.width = `${size}px`;
            counterRef.current.style.minWidth = `auto`;
          }

          if (counterValueRef.current)
            counterValueRef.current.style.fontSize = `${sizes[size]?.fontSize}px`;
        }

        if (view) {
          if (view === "primary") {
            counterRef.current.style.setProperty("--counterBg", "#2fb675");

            if (counterValueRef.current)
              counterValueRef.current.style.setProperty(
                "--counterTextColor",
                "#fff"
              );
          }

          if (view === "secondary") {
            counterRef.current.style.setProperty(
              "--counterBg",
              "rgba(131,102,86, 0.12)"
            );

            if (counterValueRef.current)
              counterValueRef.current.style.setProperty(
                "--counterTextColor",
                "#2E2F33"
              );
          }
        }

        if (stroke) {
          counterRef.current.style.outline = `${sizes[size]?.strokeWidth}px solid`;
        }

        if (pulse && (size === 12 || size === 8)) {
          counterRef.current.classList.add("counter--animation");
        } else counterRef.current.classList.remove("counter--animation");
      }
    }, [size, view, stroke, value]);

    return (
      <div className="counter" ref={counterRef}>
        {!isCounterValueHidden && (
          <span className="counter__value" ref={counterValueRef}>
            {isSingleSymbol && value}
            {value > 99 && "99+"}
          </span>
        )}
      </div>
    );
  }
);
