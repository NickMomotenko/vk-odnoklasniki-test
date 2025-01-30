export type CounterProps = {
  value?: number | string;
  size?: number;
  view?: "primary" | "secondary";
  stroke?: true | false;
  pulse?: true | false;
  children?: React.ReactNode;
};
