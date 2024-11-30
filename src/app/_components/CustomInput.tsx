import { useEffect, useState } from "react";

interface CustomInputProps {
  placeholder: string;
  name: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  name,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [inpVal, setInpVal] = useState<string>("");

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
        className="rounded-lg border p-2"
        onFocus={() => setFocus(true)}
        onBlur={() => (inpVal != "" ? setFocus(true) : setFocus(false))}
        onChange={(e) => setInpVal(e.target.value)}
      />
      <span
        className={`absolute left-3 top-2 select-none text-xl transition-all duration-700 ${focus ? "-translate-y-6 bg-white text-black" : "text-slate-400"}`}
      >
        {placeholder}
      </span>
    </div>
  );
};
