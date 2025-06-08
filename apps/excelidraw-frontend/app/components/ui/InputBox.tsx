import React, { forwardRef } from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
  type: string;
  ref: any;
  onChange?: () => void;
}


export const InputBox = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  ({ label, ...props }, ref) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input ref={ref} {...props} className="border rounded px-3 py-2 border-gray-400" />
    </div>
  )
);