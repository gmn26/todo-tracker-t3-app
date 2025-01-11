"use client";

import { useEffect, useState } from "react";

interface CustomInputProps {
  placeholder: string;
  name: string;
  inpVal?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  require: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  name,
  inpVal,
  handler,
  require,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (inpVal == "") {
      setFocus(false);
    } else {
      setFocus(true);
    }
  }, [inpVal]);

  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        className="w-full rounded-lg border bg-transparent p-2"
        onFocus={() => setFocus(true)}
        onBlur={() => (inpVal != "" ? setFocus(true) : setFocus(false))}
        onChange={handler}
        value={inpVal}
        required={require}
      />
      <span
        className={`absolute left-3 top-2 w-fit select-none bg-white text-xl transition-all duration-700 ${focus ? "z-0 -translate-y-6 text-black" : "-z-10 text-slate-400"}`}
      >
        {placeholder}
      </span>
    </div>
  );
};
