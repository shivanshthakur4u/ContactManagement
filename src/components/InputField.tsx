import React from "react";

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  onChange,
  type,
  id,
  icon,
}) => {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-4 py-2">
      {icon}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border-none rounded focus:outline-none"
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
