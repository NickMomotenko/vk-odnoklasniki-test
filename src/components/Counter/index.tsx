import "./styles.scss";

type CounterProps = {
  size?: 24 | 20 | 16 | 12 | 8;
};

export const Counter: React.FC<CounterProps> = ({ size = 24 }) => {
  return (
    <div className="counter" style={{ height: `${size}px` }}>
      22
    </div>
  );
};
