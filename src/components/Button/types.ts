export type ButtonProps = {
  labelText?: string;
  size?: 28 | 36 | 56;
  view?: "primary" | "secondary";
  stroke?: boolean;
  counter?: boolean;
  disabled?: boolean;
  focused?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};
