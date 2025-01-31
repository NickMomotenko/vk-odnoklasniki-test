import { useRef } from "react";

export const useLoaderStyles = ({ size, view }: any) => {
  const loaderRef = useRef<any>();

  const setLoaderSize = () => {
    loaderRef.current.style.height = `${size}px`;
    loaderRef.current.style.width = `${size}px`;
  };

  const setLoaderView = () => {
    if (view === "primary")
      loaderRef.current.style.setProperty("--loaderColor", "#fff");

    if (view === "secondary")
      loaderRef.current.style.setProperty("--loaderColor", "#2E2F33");
  };

  return {
    loaderRef,
    setLoaderSize,
    setLoaderView,
  };
};
