import { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';

import { ITech } from './Interface';

interface ISliderProps {
  techList: ITech[];
  parentWidth: number;
  onParentWidthChange: () => void;
}

interface SlideTrackProps {
  length: number;
  itemWidth: number;
}

const scroll = (length: number, itemWidth: number) => keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-${itemWidth}px * ${length}));
    }
`;

const SliderWrapper = styled.div.attrs((props) => ({
  className: classNames(
    'mt-8 h-9 overflow-hidden w-full relative before:w-6 after:w-6 md:mt-14 md:h-12 md:before:w-12 md:after:w-12 lg:before:w-20 lg:after:w-20',
    props.className,
  ),
}))`
  &.slide-animate::before,
  &.slide-animate::after {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    position: absolute;
    height: 100%;
    z-index: 2;
  }

  &.slide-animate::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &.slide-animate::before {
    left: 0;
    top: 0;
  }
`;

const SlideTrack = styled.div.attrs((props) => ({
  className: classNames('flex overflow-hidden', props.className),
}))<SlideTrackProps>`
  & {
    width: calc(${(props) => props.itemWidth}px * ${(props) => props.length});
  }

  &.slide-animate {
    width: calc(${(props) => props.itemWidth}px * ${(props) => props.length * 2});
    animation: ${(props) => scroll(props.length, props.itemWidth)} 10s linear infinite;
  }
`;

function Slider({ techList, parentWidth, onParentWidthChange }: ISliderProps) {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [slideTrackWidth, setSlideTrackWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const SlideRef = useRef<HTMLDivElement | null>(null);
  const SlideTrackRef = useRef<HTMLDivElement | null>(null);
  const length = techList.length;

  useLayoutEffect(() => {
    if (SlideRef.current) {
      setItemWidth(SlideRef.current.clientWidth);
    }
  }, [techList]);

  useLayoutEffect(() => {
    setSlideTrackWidth(itemWidth * techList.length);
  }, [itemWidth, techList]);

  const handleWindowResize = useCallback(() => {
    onParentWidthChange();

    if (SlideRef.current) {
      setItemWidth(SlideRef.current.clientWidth);
    }
  }, [SlideRef, onParentWidthChange]);

  useEffect(() => {
    addEventListener('resize', handleWindowResize);

    return () => {
      removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  const handleScrollAnimation = useCallback(() => {
    if (parentWidth < slideTrackWidth) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [parentWidth, slideTrackWidth]);

  useEffect(() => {
    handleScrollAnimation();
  }, [handleScrollAnimation, parentWidth, slideTrackWidth, itemWidth]);

  return (
    <SliderWrapper className={classNames({ 'slide-animate': isAnimate })}>
      <SlideTrack
        ref={SlideTrackRef}
        length={length}
        itemWidth={itemWidth}
        className={classNames({ 'slide-animate': isAnimate })}
      >
        {techList.map((tech, index) => {
          if (index === 0) {
            return (
              <div ref={SlideRef} key={Math.random()} className="pr-6">
                <tech.Icon className={`w-9 h-9 md:w-12 md:h-12 ${tech.color}`} />
              </div>
            );
          }
          return (
            <div key={Math.random()} className="pr-6">
              <tech.Icon className={`w-9 h-9 md:w-12 md:h-12 ${tech.color}`} />
            </div>
          );
        })}
        {techList.map((tech) => {
          return (
            <div key={Math.random()} className="pr-6">
              <tech.Icon className={`w-9 h-9 md:w-12 md:h-12 ${tech.color}`} />
            </div>
          );
        })}
      </SlideTrack>
    </SliderWrapper>
  );
}

export default Slider;
