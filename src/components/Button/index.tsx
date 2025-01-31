import { useEffect, useRef, useState } from "react";

import { Loader } from "../Loader";

import { useButton } from "../../hooks/useButton";

import { ButtonProps } from "./types";

import "./styles.scss";
import { sizes } from "./helper";
import { useButtonWithCounterContext } from "../../compound/ButtonWithCounter";

export const Button: React.FC<ButtonProps> = ({
  labelText = "Что делать",
  size = 36,
  view = "primary",
  disabled = false,
  focused = false,
  counter = true,
  loading = false,
  children,
}) => {
  const context = useButtonWithCounterContext();
  const [isLoading, setIsloading] = useState(
    context?.isLoading ? context?.isLoading : loading
  );

  const {
    buttonRef,
    buttonContentRef,
    setButtonSize,
    setButtonView,
    setFocused,
  } = useButton({ size, view });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize({ buttonSize: context?.size });
      setButtonView(context?.view);
      setFocused();
    }
  }, [size, view, focused]);

  useEffect(() => {
    if (buttonRef.current) {
      if (isLoading) {
        buttonRef.current.classList.add("button--loading");
      }
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsloading(true);
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
        {children && counter && (
          <div
            className="button__counter"
            style={{ marginLeft: `${sizes[size]?.loaderPadding}px` }}
          >
            {children}
          </div>
        )}
      </div>
      {isLoading && <div className="button__shimmer"></div>}

      <div className="button__loader">
        <Loader
          isLoading={isLoading}
          size={
            context?.size
              ? sizes[context?.size]?.loaderSize
              : sizes[size]?.loaderSize
          }
        />
      </div>
    </button>
  );
};
