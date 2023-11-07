import { forwardRef, useEffect, useState } from 'react';
import { IconType } from 'react-icons/lib';
import { FaCheck } from 'react-icons/fa';
import classNames from 'classnames';

interface InputProps {
  name: string;
  label: string;
  Icon?: React.ElementType | IconType;
  type: string;
  value: string;
  className?: string;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

const Input = ({ type, name, label, Icon, value, setState }: InputProps) => {
  const [checked, setChecked] = useState(false);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setState((prev) => [...prev, event.target.value]);
    } else {
      setState((prev) => {
        return prev.filter((filterTag) => filterTag !== event.target.value);
      });
    }
  };

  return (
    <div className="text-sm cursor-pointer py-4 md:py-2 md:overflow-hidden ">
      <label
        htmlFor={name}
        className={classNames('flex-1 flex items-center justify-center sm:justify-between cursor-pointer', {
          'text-normaltext font-semibold': checked,
          'text-zinc-500': !checked,
        })}
      >
        <div className="flex items-center justify-center">
          {Icon && <Icon className="w-8 h-8  md:w-5 md:h-5 sm:mr-2 shrink-0" />}
          <h4 className="hidden md:block grow capitalize">{label}</h4>
        </div>
        <div className="">
          <FaCheck
            className={classNames('hidden sm:block w-[12px] h-[12px]', { visible: checked, invisible: !checked })}
          />
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            checked={checked}
            className="hidden"
            onChange={(event) => {
              setChecked(event.target.checked);
              filterHandler(event);
            }}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
