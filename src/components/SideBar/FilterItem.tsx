import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';
import styled from 'styled-components';

import { ICheckboxItem } from '../UI/Input/Interface';
import DropdownCheckboxes from './DropdownCheckboxes';

interface IFilterItemProps {
  optionList: ICheckboxItem[];
  title: string;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

interface IFilterWrapperProps {
  titleHeight: number;
  menuHeight: number;
}

const FilterWrapper = styled.div.attrs((props) => ({
  className: classNames('my-4 md:overflow-hidden transition-all', props.className),
}))<IFilterWrapperProps>`
  & {
    height: ${(props) => (props.titleHeight > 0 ? props.titleHeight + 'px' : 'fit-content')};
    &.active {
      height: calc(${(props) => props.titleHeight + props.menuHeight}px);
    }
  }
`;

function FilterItem({ optionList, title, setState }: IFilterItemProps) {
  const [isActive, setIsActive] = useState(false);
  const [menuTitleHeight, setMenuTitleHeight] = useState(0);
  const [menuListHeight, setMenuListHeight] = useState(0);
  const menuTitleRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (menuTitleRef.current) {
      setMenuTitleHeight(menuTitleRef.current.offsetHeight);
    }
  }, [optionList]);

  useLayoutEffect(() => {
    if (menuListRef.current) {
      setMenuListHeight(menuListRef.current.offsetHeight);
    }
  }, [isActive, optionList]);

  const handleWindowResize = useCallback(() => {
    if (menuTitleRef.current) {
      setMenuTitleHeight(menuTitleRef.current.offsetHeight);
    }
    if (menuListRef.current) {
      setMenuListHeight(menuListRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    addEventListener('resize', handleWindowResize);

    return () => {
      removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  const handleClickField = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <FilterWrapper
      titleHeight={menuTitleHeight}
      menuHeight={menuListHeight}
      className={classNames({
        active: isActive,
      })}
    >
      <div
        ref={menuTitleRef}
        className={classNames(
          'flex cursor-pointer  justify-center sm:justify-between items-center p-4 rounded-2xl text-lg hover:bg-gray-200/40',
          {
            'text-brand bg-gray-200/40': isActive,
            'text-neutral-500': !isActive,
          },
        )}
        onClick={handleClickField}
      >
        <div className="text-base sm:text-lg font-medium">{title}</div>
        <div className={classNames('transition-all', { 'rotate-180': isActive })}>
          <IoIosArrowDown className="hidden sm:block" />
        </div>
      </div>
      <DropdownCheckboxes
        setState={setState}
        ref={menuListRef}
        type="checkbox"
        checkboxList={optionList}
        className={classNames('p-4 transition-all', {
          hidden: !isActive,
          block: isActive,
        })}
      />
    </FilterWrapper>
  );
}

export default FilterItem;
