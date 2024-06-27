import { useEffect, useRef } from "react";

import "./styles.scss";
import { sizes } from "./helper";

type CounterProps = {
  size?: number;
  view?: "primary" | "secondary";
  stroke?: true | false;
  pulse?: true | false;
  children?: React.ReactNode;
};

export const Counter: React.FC<CounterProps> = ({
  size = 12,
  view = "primary",
  stroke = false,
  pulse = true,
  children,
}) => {
  const counterRef = useRef<any>();
  const counterValueRef = useRef<any>();

  const isCounterValueHidden = size === 12 || size === 8;

  const isSingleSymbol = children && children.length === 1;

  useEffect(() => {
    if (counterRef.current) {
      if (size) {
        counterRef.current.style.height = `${size}px`;
        if (!isSingleSymbol) {
          counterRef.current.style.width = `auto`;
          counterRef.current.style.padding = `0 ${sizes[size]?.horPadding}px`;
        } else counterRef.current.style.width = `${size}px`;

        if (counterValueRef.current)
          counterValueRef.current.style.fontSize = `${sizes[size]?.fontSize}px`;
      }

      if (view) {
        if (view === "primary") {
          counterRef.current.style.setProperty("--counterBg", "#2fb675");

          if (counterValueRef.current)
            counterValueRef.current.style.color = "#fff";
        }

        if (view === "secondary") {
          counterRef.current.style.setProperty(
            "--counterBg",
            "rgba(131,102,86, 0.12)"
          );

          if (counterValueRef.current)
            counterValueRef.current.style.color = "#2E2F33";
        }
      }

      if (stroke) {
        counterRef.current.style.border = `${sizes[size]?.strokeWidth}px solid #fff`;
      }

      if (pulse && (size === 12 || size === 8)) {
        counterRef.current.classList.add("counter--animation");
      } else counterRef.current.classList.remove("counter--animation");
    }
  }, [size, view, stroke, children]);

  return (
    <div className="counter" ref={counterRef}>
      {!isCounterValueHidden && (
        <span className="counter__value" ref={counterValueRef}>
          {isSingleSymbol && children}
          {children > 99 && "99+"}
        </span>
      )}
    </div>
  );
};
