import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-yellow-200 hover:bg-primary-700 text-gray-900 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
