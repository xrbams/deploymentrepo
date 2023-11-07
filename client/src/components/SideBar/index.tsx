import { FilterIcon, IoTIcon, MachineLearningIcon, WebsiteIcon } from '../Icons';
import { IoGameController } from 'react-icons/io5';
import { FaMobileAlt } from 'react-icons/fa';

import { ICheckboxItem } from '../UI/Input/Interface';
import FilterItem from './FilterItem';

const FIELDS: ICheckboxItem[] = [
  {
    id: 1,
    name: 'webDevelopment',
    value: 'web development',
    label: 'Web development',
    Icon: WebsiteIcon,
  },
  {
    id: 2,
    name: 'mobileDevelopment',
    value: 'mobile development',
    label: 'Mobile development',
    Icon: FaMobileAlt,
  },
  {
    id: 3,
    name: 'iot',
    value: 'IoT',
    label: 'IoT',
    Icon: IoTIcon,
  },
  {
    id: 4,
    name: 'gameDevelopment',
    value: 'game development',
    label: 'Game development',
    Icon: IoGameController,
  },
  {
    id: 5,
    name: 'machineLearning',
    value: 'machine learning',
    label: 'Machine learning',
    Icon: MachineLearningIcon,
  },
];

interface ISideBarProps {
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

const SideBar = ({ setState }: ISideBarProps) => {
  return (
    <aside className="fixed w-1/5 bg-white top-0 left-0 bottom-0 px-2 sm:px-4 lg:px-6 py-20 flex flex-col shadow-lg overflow-y-auto transition-left duration-600 ease">
      <div className="relative text-3xl text-brand flex justify-center items-center pb-4 before:absolute before:bottom-0 before:left-0 before:right-0 before:border-t before:border-gray-750">
        <FilterIcon className="hidden md:block text-white w-[30px] h-[30px]" />
        <div className="text-xl sm:text-3xl md:ml-4 font-semibold">Filter</div>
      </div>
      <div className="py-2">
        <FilterItem
          title="Fields"
          optionList={FIELDS.sort((a, b) => (a.label >= b.label ? 1 : -1))}
          setState={setState}
        />
      </div>
    </aside>
  );
};

export default SideBar;
