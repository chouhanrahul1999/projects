import React from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
  type: string;
  onChange?: () => void;
}


export const InputBox = (props: InputBoxProps) => {
  return (
    <div>
      <div className="text-md font-medium text-left p-2 text-gray-800">
        {props.label}
      </div >
      <input
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder:text-gray-200"
      />
    </div>
  );
};