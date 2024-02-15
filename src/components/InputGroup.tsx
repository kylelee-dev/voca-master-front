import React from "react";
import cls from "classnames";
interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}
const InputGroup: React.FC<InputGroupProps> = ({
  className = "mb-2",
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{ minWidth: 300 }}
        placeholder={placeholder}
        value={value}
        className={cls(
          `pl-2 block border-b border-gray-400 w-10/12 mb-6 md:w-2/3 py-1 mx-auto focus:bg-blue-200`,
          {
            "border-red-500": error,
          }
        )}
        onChange={(e) => setValue(e.target.value)}
      />
      <small className="font-medium text-red">{error}</small>
    </div>
  );
};

export default InputGroup;
