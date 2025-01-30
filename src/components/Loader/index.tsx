import { forwardRef, useEffect, useRef } from "react";

import { ReactSVG } from "react-svg";

import loaderIcon from "../../assets/loader.svg";

import "./styles.scss";

type LoaderProps = {
  size?: number;
  isActive?: boolean;
  view?: string;
};

export const Loader: React.FC<LoaderProps> = forwardRef<
  HTMLDivElement,
  LoaderProps
>(({ size, isActive, view }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const loaderRef = ref || internalRef;

  useEffect(() => {
    if (loaderRef.current) {
      loaderRef.current.style.height = `${size}px`;
      loaderRef.current.style.width = `${size}px`;
    }
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      if (isActive) {
        loaderRef.current.classList.add("loader--active");
      } else loaderRef.current.classList.remove("loader--active");
    }, 100);
  }, [isActive]);

  useEffect(() => {
    if (loaderRef.current) {
      if (view === "primary")
        loaderRef.current.style.setProperty("--loaderColor", "#fff");
   
      if(view === 'secondary')
        loaderRef.current.style.setProperty("--loaderColor", "#2E2F33");
    }
  }, [view]);

  return (
    <div className="loader" ref={loaderRef}>
      <ReactSVG src={loaderIcon} className="loader__img" />
    </div>
  );
});
