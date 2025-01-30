import { useEffect, useRef } from "react";

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
  children,
}) => {
  const {
    buttonRef,
    buttonContentRef,
    setButtonSize,
    setButtonView,
    setFocused,
  } = useButton({ size, view });

  const { isLoading, setIsloading } = useButtonWithCounterContext();

  const loaderRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize();
      setButtonView();
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
        {children && (
          <div
            className="button__counter"
            style={{ marginLeft: `${sizes[size]?.loaderPadding}px` }}
          >
            {children}
          </div>
        )}
      </div>
      {/* <div className="button__shimmer"></div> */}
      <div className="button__loader">
        <Loader
          isActive={isLoading}
          size={sizes[size]?.loaderSize}
          view={view}
          ref={loaderRef}
        />
      </div>
    </button>
  );
};
