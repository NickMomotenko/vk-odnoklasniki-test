import { useEffect, useRef, useState } from "react";

import { sizes } from "./helper";

import "./styles.scss";
import { Counter } from "../Counter";
import { Loader } from "../Loader";

type ButtonVKProps = {
  labelText: string;
  size?: 28 | 36 | 56;
  view?: "primary" | "secondary";
  stroke?: boolean;
  pulse?: boolean;
  counter?: boolean;
};

export const Button: React.FC<ButtonVKProps> = ({
  labelText = "Что делать",
  counter = false,
  size = 28,
  view = "primary",
}) => {
  const [load, setLoad] = useState(false);

  const buttonRef = useRef<any>();
  const buttonContentRef = useRef<any>();

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
        }
      }
    }
  }, [size, view]);

  useEffect(() => {
    if (buttonRef.current) {
      if (load) {
        buttonRef.current.classList.add("button--load");
      }
    }
  }, [load]);

  return (
    <button
      className="button"
      type="button"
      ref={buttonRef}
      onClick={() => setLoad(true)}
    >
      <div className="button__content" ref={buttonContentRef}>
        {labelText && <span className="button__label">{labelText}</span>}
        {counter && (
          <div
            className="button__counter"
            style={{ marginLeft: `${sizes[size]?.loaderPadding}px` }}
          >
            <Counter size={sizes[size]?.loaderSize} view={view}>
              2
            </Counter>
          </div>
        )}
      </div>

      <div className="button__loader">
        <Loader isActive={load} size={sizes[size]?.loaderSize} />
      </div>
    </button>
  );
};
