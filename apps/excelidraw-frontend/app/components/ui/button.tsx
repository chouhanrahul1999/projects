"use client";

import { ReactElement } from "react";

interface ButtonProps {
  size: "sm" | "lg" | "md";
  variant: "primary" | "secondary";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  text: string;
}

const varientStyle = {
  primary: "flex bg-gray-900 text-white hover:bg-gray-800 hover:cursor-pointer transition-colors",
  secondary: "group bg-gray-900 text-white",
};

const size = {
  sm: "w-full justify-center py-2.5 rounded-xl",
  md: "px-6 py-2.5 rounded-xl",
  lg: "px-8 py-4 rounded-2xl font-medium",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${varientStyle[props.variant]} ${size[props.size]}`}
      onClick={props.onClick}
    >
      {props.startIcon && <span className="mr-2">{props.startIcon}</span>}
      {props.text}
      {props.endIcon && <span className="ml-2">{props.endIcon}</span>}
    </button>
  );
};
