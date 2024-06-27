import { useEffect, useRef } from "react";

import "./styles.scss";

import loaderIcon from "../../assets/loader.svg";

type LoaderProps = {
  size?: number;
  isActive?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ size, isActive }) => {
  const loaderRef = useRef<any>();

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
      <img src={loaderIcon} alt="loader icon" className="loader__img" />
    </div>
  );
};
