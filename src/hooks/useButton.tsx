import { useRef } from "react";

import { sizes } from "../components/Button/helper";
import { CounterProps } from "../components/Counter/types";

export const useButton = ({ size, view }: CounterProps) => {
  const buttonRef = useRef<HTMLButtonElement | any>();
  const buttonContentRef = useRef<HTMLDivElement | any>();

  const setButtonSize = ({ buttonSize }: any) => {
    size = buttonSize ? buttonSize : size;

    if (sizes[size]) {
      Object.assign(buttonRef.current.style, {
        padding: `${sizes[size]?.verPadding}px ${sizes[size]?.horPadding}px`,
        height: `${size}px`,
        fontSize: `${sizes[size]?.fontSize}px`,
        lineHeight: `${sizes[size]?.fontSize}px`,
      });
    }
  };

  const setButtonView = (argumentView: any) => {
    view = argumentView ? argumentView : view;

    if (view === "primary") {
      Object.assign(buttonRef.current.style, {
        background: "rgb(255, 119, 0)",
        color: `#fff`,
      });
      buttonRef.current.style.setProperty(
        "--buttonHoverBgColor",
        "rgba(255, 255, 255, 0.12)"
      );
      buttonRef.current.style.setProperty(
        "--shimmerColor",
        "linear-gradient(90.00deg, rgba(46, 47, 51, 0), rgba(46, 47, 51, 0.08) 50.329%, rgba(46, 47, 51, 0) 100%)"
      );
    }

    if (view === "secondary") {
      Object.assign(buttonRef.current.style, {
        background: "rgba(131,102,86,.12)",
        color: `rgb(46, 47, 51)`,
      });
      buttonRef.current.style.setProperty(
        "--buttonHoverBgColor",
        "rgba(46, 47, 51, 0.12)"
      );
      buttonRef.current.style.setProperty(
        "--shimmerColor",
        "linear-gradient(90.00deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50.329%, rgba(255, 255, 255, 0) 100%)"
      );
    }
  };

  const setFocused = () => {
    buttonRef.current.focus();
  };

  return {
    buttonRef,
    buttonContentRef,
    setButtonSize,
    setButtonView,
    setFocused,
  };
};
