import React from "react";
import Link from "next/link"; // Import Next.js's Link component

interface BottomWarningProps {
  label: string;
  buttonText: string;
  to: string; // The URL or path for the link
}

export const BottomWarning = (props: BottomWarningProps) => {
  return (
    <div className="py-2 text-sm flex justify-center gap-2">
      <div>{props.label}</div>
      <Link href={props.to} className="pointer underline pl-1 cursor-pointer">
        {props.buttonText}
      </Link>
    </div>
  );
};