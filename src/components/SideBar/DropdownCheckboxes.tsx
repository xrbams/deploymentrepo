import { forwardRef, useState, useEffect } from 'react';

import { ICheckboxItem } from '../UI/Input/Interface';
import { Input } from '../UI';

interface IDropdownCheckboxesProps {
  type: string;
  checkboxList: ICheckboxItem[];
  className: string;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

const DropdownCheckboxes = forwardRef<HTMLDivElement, IDropdownCheckboxesProps>(
  ({ type, checkboxList, className, setState }: IDropdownCheckboxesProps, ref) => {
    return (
      <div ref={ref} className={className}>
        {checkboxList.map((checkbox) => (
          <Input
            setState={setState}
            key={checkbox.id}
            type={type}
            name={checkbox.name}
            value={checkbox.value}
            label={checkbox.label}
            Icon={checkbox.Icon}
          />
        ))}
      </div>
    );
  },
);

export default DropdownCheckboxes;
