import { forwardRef, useEffect, useRef } from "react";

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
      <svg
        className="loader__img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs>
          <clipPath id="clip1_2604">
            <rect
              id="loader"
              rx="-0.500000"
              width="100"
              height="100"
              transform="translate(0.500000 0.500000)"
              fill="white"
              fill-opacity="0"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#clip1_2604)">
          <path
            id="shape"
            d="M0 12C0 14.82 0.98 17.42 2.62 19.48C4.38 21.69 6.76 23.11 9.33 23.69C12.08 24.32 14.84 23.95 17.2 22.8C19.75 21.58 21.67 19.57 22.8 17.2C24.03 14.65 24.28 11.89 23.69 9.32C23.06 6.57 21.53 4.25 19.47 2.61C17.27 0.85 14.62 0 12 0L12 3C14.12 3 16.07 3.73 17.61 4.96C19.26 6.28 20.33 8.07 20.77 9.99C21.24 12.06 20.96 14.13 20.1 15.9C19.18 17.81 17.67 19.25 15.9 20.1C13.99 21.02 11.91 21.21 9.99 20.77C7.92 20.3 6.19 19.15 4.96 17.6C3.64 15.95 3 13.96 3 12L0 12Z"
            fill="#FFFFFF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
});
