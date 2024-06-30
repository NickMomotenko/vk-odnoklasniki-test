import { forwardRef, useEffect, useRef } from "react";

import { ReactSVG } from "react-svg";

import loaderIcon from "../../assets/loader.svg";

import "./styles.scss";

type LoaderProps = {
  size?: number;
  isActive?: boolean;
};

export const Loader: React.FC<LoaderProps> = forwardRef<
  HTMLDivElement,
  LoaderProps
>(({ size, isActive }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const loaderRef = ref || internalRef;

  useEffect(() => {
    if (loaderRef.current) {
      setTimeout(() => {
        loaderRef.current.style.height = `${size}px`;
        loaderRef.current.style.width = `${size}px`;

        if (isActive) {
          loaderRef.current.classList.add("loader--active");
        } else loaderRef.current.classList.remove("loader--active");
      }, 100);
    }
  }, [size, isActive]);

  return (
    <div className="loader" ref={loaderRef}>
      <ReactSVG src={loaderIcon} className="loader__img" />
    </div>
  );
});
