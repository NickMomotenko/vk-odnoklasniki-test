import { useEffect, useRef } from "react";

import "./styles.scss";
import { sizes } from "./helper";

type CounterProps = {
  size?: 24 | 20 | 16 | 12 | 8;
  view?: "primary" | "secondary";
  stroke?: true | false;
  pulse?: true | false;
};

export const Counter: React.FC<CounterProps> = ({
  size = 12,
  view = "secondary",
  stroke = true,
  pulse = true,
}) => {
  const counterRef = useRef<any>();
  const counterValueRef = useRef<any>();

  const isCounterValueHidden = size === 12 || size === 8;

  const classes =
    pulse && (size === 12 || size === 8)
      ? "counter counter--animation"
      : "counter";

  useEffect(() => {
    if (counterRef.current) {
      if (size) {
        counterRef.current.style.height = `${size}px`;
        counterRef.current.style.width = `${size}px`;
        counterRef.current.style.lineHeight = `${size}px`;

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
    }
  }, [size, view, stroke]);

  return (
    <div className={classes} ref={counterRef}>
      {!isCounterValueHidden && (
        <span className="counter__value" ref={counterValueRef}>
          1
        </span>
      )}
    </div>
  );
};
