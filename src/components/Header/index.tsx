import { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
// import Tippy from '@tippyjs/react/headless';

import { IoMdClose } from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';

import { IconBrand } from '../Icons';
import routes from '~/configs/routes';

// import Dropdown from './Dropdown';

interface INavItems {
  title: string;
  id: string;
}

export const NAV_ITEMS: INavItems[] = [
  {
    title: 'Home',
    id: 'intro',
  },
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Fields',
    id: 'fields',
  },
  {
    title: 'Projects',
    id: 'latestprojects',
  },

  {
    title: 'Contact',
    id: 'contact',
  },
];

interface IActiveSections {
  [sectionName: string]: boolean;
}

const HeaderContainer = styled.header.attrs((props) => ({
  className: classNames('fixed w-full z-50 bg-transparent', props.className),
}))`
  &.scroll {
    background-color: white;
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;

const NavLink = styled.li.attrs((props) => ({
  className: classNames(
    `text-brand lg:text-[#ffffff80] font-normal text-xl lg:mx-7 lg:text-lg cursor-pointer relative lg:hover:text-white py-6 lg:py-0 transition-all duration-300 border-solid border-b-[1px]  last:border-none lg:border-none `,
    props.className,
  ),
}))`
  &.active {
    color: #fff;
  }

  &.scroll {
    color: var(--color-brand);

    &.active::before {
      width: 100% !important;
      left: 0 !important;
    }

    &:before {
      position: absolute;
      content: '';
      right: 0;
      bottom: -0.25rem;
      width: 0;
      height: 2px;
      border-radius: 99999px;
      background-color: var(--color-brand);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover:before {
      width: 100%;
      left: 0;
    }
  }

  @media (max-width: 1023px) {
    &.active {
      color: #4e008e;
    }
    &.scroll::before {
      display: none;
    }
  }
`;

// const LanguageButton = styled.button.attrs((props) => ({
//   className: classNames(
//     'flex justify-center items-center text-base px-3 py-2 border-2 border-transparent border-solid bg-white text-[#707070] rounded-3xl hover:opacity-80 transition-all duration-300 ',
//     props.className,
//   ),
// }))`
//   &.scroll {
//     color: var(--color-brand);
//     border: 2px solid var(--color-brand);
//     // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

//     &:hover {
//       background-color: var(--color-brand);
//       color: white;
//     }
//   }
// `;

function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState<IActiveSections>({
    intro: false,
    about: false,
    fields: false,
    latestprojects: false,
    contact: false,
  });

  useLayoutEffect(() => {
    if (window.scrollY > 40) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
  };

  return (
    <HeaderContainer className={classNames({ 'scroll shadow-lg': isScrollingDown })}>
      <div className="flex justify-between items-center text-base font-medium px-6 md:px-12 h-20 max-w-[1440px] mx-auto">
        {/* logo */}
        <RouterLink to={routes.home} className="">
          <IconBrand
            className={classNames(`block w-48 h-10 md:w-60 md:h-12  ${isScrollingDown ? 'text-brand' : 'text-white'}`)}
          />
        </RouterLink>
        <div
          className={classNames(
            `cursor-pointer bg-transparent flex justify-normal items-center rounded-full lg:hidden`,
          )}
          onClick={handleOpenMenu}
        >
          <HiIcons.HiOutlineMenu
            className={classNames(`text-xl md:text-2xl `, {
              'text-white': !isScrollingDown,
              'text-brand': isScrollingDown,
            })}
          />
        </div>
        {/* backdrop */}
        <div
          className={classNames(
            `fixed top-0 right-0 left-0 bottom-0 bg-black/50 transition-all ease-linear lg:hidden`,
            {
              hidden: !openMenu,
            },
          )}
          onClick={handleCloseMenu}
        ></div>
        {/* actions list */}
        <nav
          className={classNames(
            `flex flex-col fixed top-0 -right-full bottom-0 h-screen px-7 cursor-pointer z-40 bg-white w-2/3 md:w-1/2 lg:static lg:w-full lg:h-full lg:flex-row lg:items-center lg:justify-end lg:bg-transparent transition-all ease-linear`,
            {
              'right-0': openMenu,
            },
          )}
        >
          <div className="w-full flex justify-end items-center h-20 lg:hidden">
            <div className="" onClick={handleCloseMenu}>
              <IoMdClose className="text-2xl md:text-3xl text-brand" />
            </div>
          </div>
          <ul className="flex flex-col lg:flex-row lg:justify-end lg:mt-0">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                className={classNames(`md:text-2xl lg:text-xl md:py-8`, {
                  scroll: isScrollingDown,
                  active: isActive[item.id] == true,
                })}
              >
                <Link
                  spy
                  onSetActive={() => setIsActive((prev) => ({ ...prev, [item.id]: true }))}
                  onSetInactive={() => setIsActive((prev) => ({ ...prev, [item.id]: false }))}
                  offset={-80}
                  to={item.id}
                  onClick={() => setOpenMenu(false)}
                >
                  {' '}
                  {item.title}
                </Link>
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* </nav> */}

        {/* Right buttons */}
        {/* <div>
      <Tippy
        interactive
        trigger="click"
        placement="bottom-end"
        render={(attrs) => (
          <div tabIndex={-1} {...attrs}>
            <Dropdown isScrollingDown={isScrollingDown} />
          </div>
        )}
      >
        <LanguageButton className={classNames({ scroll: isScrollingDown })}>
          <LanguageIcon width="18px" height="18px" className="relative top-[1px]" />
          <p className="ml-[6px]">Language</p>
        </LanguageButton>
      </Tippy>
    </div> */}
      </div>
    </HeaderContainer>
  );
}

export default Header;
