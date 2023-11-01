import { IconType } from 'react-icons/lib';

export interface ICheckboxItem {
  id: number;
  value: string;
  label: string;
  name: string;
  Icon?: React.ElementType | IconType;
}
