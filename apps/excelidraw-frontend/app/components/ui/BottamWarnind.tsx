import React from "react";
import Link from "next/link";

interface BottomWarningProps {
  label: string;
  buttonText: string;
  to: string;
}

export const BottomWarning = (props: BottomWarningProps) => {
  return (
    <div className="py-2 text-sm flex justify-center gap-2">
      <div className="text-gray-600">{props.label}</div>
      <Link href={props.to} className="pointer underline cursor-pointer">
        {props.buttonText}
      </Link>
    </div>
  );
};