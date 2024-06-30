import { useEffect, useRef, useState } from "react";

import { sizes } from "./helper";

import "./styles.scss";
import { Counter } from "../Counter";
import { Loader } from "../Loader";

type ButtonVKProps = {
  labelText?: string;
  counterValue?: string | number;
  size?: 28 | 36 | 56;
  view?: "primary" | "secondary";
  stroke?: boolean;
  counter?: boolean;
  disabled?: boolean;
  focused?: boolean;
  loading?: boolean;
};

export const Button: React.FC<ButtonVKProps> = ({
  labelText = "Что делать",
  counter = false,
  counterValue = 2,
  size = 36,
  view = "primary",
  disabled = false,
  focused = false,
  loading = false,
}) => {
  const [isLoading, setLoading] = useState(loading ? loading : false);

  const buttonRef = useRef<HTMLButtonElement>();
  const buttonContentRef = useRef<HTMLDivElement>();

  const counterRef = useRef<HTMLDivElement>();
  const loaderRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (buttonRef.current) {
      if (size) {
        buttonRef.current.style.padding = `${sizes[size]?.verPadding}px ${sizes[size]?.horPadding}px`;
        buttonRef.current.style.height = `${size}px`;
        buttonRef.current.style.fontSize = `${sizes[size]?.fontSize}px`;
      }

      if (view) {
        if (view === "primary") {
          buttonRef.current.style.setProperty(
            "--buttonBgColor",
            "rgb(255, 119, 0)"
          );
          buttonRef.current.style.setProperty(
            "--buttonTextColor",
            "rgb(255, 255, 255)"
          );
          buttonRef.current.style.setProperty(
            "--buttonHoverBgColor",
            "rgba(255, 255, 255, 0.12)"
          );

          if (counterRef.current) {
            counterRef.current.style.setProperty(
              "--counterBg",
              "rgba(255, 255, 255, 0.12)"
            );
          }

          if (loaderRef.current) {
            loaderRef.current.style.setProperty("--loaderColor", "#fff");
          }
        }

        if (view === "secondary") {
          buttonRef.current.style.setProperty(
            "--buttonBgColor",
            "rgba(103,102,86,.12)"
          );
          buttonRef.current.style.setProperty(
            "--buttonTextColor",
            "rgb(46, 47, 51)"
          );
          buttonRef.current.style.setProperty(
            "--buttonHoverBgColor",
            "rgba(46, 47, 51, 0.12)"
          );

          if (loaderRef.current) {
            loaderRef.current.style.setProperty("--loaderColor", "#000");
          }
        }
      }

      if (focused) {
        buttonRef.current.focus();
      }
    }
  }, [size, view, focused]);

  useEffect(() => {
    if (buttonRef.current) {
      if (isLoading) {
        setLoading(true);
        buttonRef.current.classList.add("button--loading");
      } else {
        setLoading(false);
        buttonRef.current.classList.remove("button--loading");
      }
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <button
      className="button"
      type="button"
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="button__content" ref={buttonContentRef}>
        {labelText && <span className="button__label">{labelText}</span>}
        {counter && (
          <div
            className="button__counter"
            style={{ marginLeft: `${sizes[size]?.loaderPadding}px` }}
          >
            <Counter
              value={counterValue}
              size={sizes[size]?.loaderSize}
              view={view}
              ref={counterRef}
            />
          </div>
        )}
      </div>
      <div className="button__loader">
        <Loader
          isActive={isLoading}
          size={sizes[size]?.loaderSize}
          ref={loaderRef}
        />
      </div>
    </button>
  );
};
