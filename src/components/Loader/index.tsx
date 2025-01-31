import { forwardRef, useEffect, useRef } from "react";

import { ReactSVG } from "react-svg";

import loaderIcon from "../../assets/loader.svg";

import "./styles.scss";
import { useButtonWithCounterContext } from "../../compound/ButtonWithCounter";
import { useLoaderStyles } from "../../hooks/useLoaderStyles";

type LoaderProps = {
  size?: number;
  isLoading?: boolean;
  view?: string;
};

export const Loader: React.FC<LoaderProps> = forwardRef<
  HTMLDivElement,
  LoaderProps
>(({ size, isLoading }) => {
  const context = useButtonWithCounterContext();

  const { loaderRef, setLoaderSize, setLoaderView } = useLoaderStyles({
    size,
    view: context?.view,
  });

  useEffect(() => {
    setLoaderSize();
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        loaderRef.current.classList.add("loader--active");
      } else loaderRef.current.classList.remove("loader--active");
    }, 100);
  }, [isLoading]);

  useEffect(() => {
    setLoaderView();
  }, [context?.view]);

  return (
    <div className="loader" ref={loaderRef}>
      <ReactSVG src={loaderIcon} className="loader__img" />
    </div>
  );
});
