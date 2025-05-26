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
      <div className="text-md font-medium text-left pt-3 ml-2 text-gray-900">
        {props.label}
      </div >
      <input
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full px-4 py-2 border border-gray-400 rounded-lg placeholder:text-gray-500"
      />
    </div>
  );
};