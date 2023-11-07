import { useState } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

interface IDropdownProps {
  isScrollingDown: boolean;
}

interface ILanguage {
  code: string;
  name: string;
}

const LANGUAGES: ILanguage[] = [
  {
    code: 'VN',
    name: 'Đông Lào',
  },
  {
    code: 'GB',
    name: 'English',
  },
  {
    code: 'FI',
    name: 'Suomi',
  },
];

const NavLanguageLink = styled.li.attrs((props) => ({
  className: classNames(
    `w-full px-4 py-2 flex items-center hover:bg-black/10 hover:cursor-pointer transition-colors rounded-xl`,
    props.className,
  ),
}))`
  &.scroll {
    color: var(--color-brand);

    &:hover {
      background-color: var(--color-brand);
      color: white;
    }
  }
`;

function Dropdown({ isScrollingDown }: IDropdownProps) {
  return (
    <ul className="flex flex-col items-center font-semibold text-[#707070] bg-white w-52 py-4 px-3 rounded-2xl shadow-dropdownmenu">
      {LANGUAGES.map((lang) => (
        <NavLanguageLink key={lang.code} className={classNames({ scroll: isScrollingDown })}>
          <ReactCountryFlag countryCode={lang.code} className="mr-3" svg />
          <p>{lang.name}</p>
        </NavLanguageLink>
      ))}
    </ul>
  );
}

export default Dropdown;
