import { useEffect, useState } from "react";

import { Loader } from "../Loader";

import { useButtonWithCounterContext } from "../../compound/ButtonWithCounter";

import { useButton } from "../../hooks/useButton";

import { ButtonProps } from "./types";

import { sizes } from "./helper";

import "./styles.scss";

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
  } = useButton({ size: context?.size ?? size, view });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize();
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
    if (isLoading || disabled) return;

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
        {labelText && (
          <span className="button__label">
            {context?.labelText ?? labelText}
          </span>
        )}
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
          view={view}
        />
      </div>
    </button>
  );
};
