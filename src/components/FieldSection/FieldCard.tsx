import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { ITech } from './Interface';
import Slider from './Slider';

interface IFieldCardProps {
  name: string;
  description: string;
  techList: ITech[];
}

const CardWrapper = styled.div.attrs((props) => ({
  className: classNames(
    'overflow-hidden col-span-1 flex flex-col justify-between bg-white relative rounded-lg shadow-xl p-8 hover:shadow-2xl top-0 hover:-top-1 transition-all',
    props.className,
  ),
}))``;

const SlideTrack = styled.div.attrs((props) => ({
  className: classNames('flex slide-track', props.className),
}))`
  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-4rem * 9));
    }
  }

  &.slide-track {
    animation: scroll 10s linear infinite;
    width: calc(4rem * 18);
  }
`;

function FieldCard({ name, description, techList }: IFieldCardProps) {
  const FieldCardRef = useRef<HTMLDivElement>(null);
  const [fieldWidth, setFieldWidth] = useState(0);
  useLayoutEffect(() => {
    handleParentWidthChange();
  }, []);

  const handleParentWidthChange = () => {
    if (FieldCardRef.current) {
      const computedStyle = getComputedStyle(FieldCardRef.current);
      const width =
        FieldCardRef.current.clientWidth -
        parseFloat(computedStyle.paddingLeft) -
        parseFloat(computedStyle.paddingRight);
      setFieldWidth(width);
    }
  };

  return (
    <CardWrapper ref={FieldCardRef}>
      <div>
        <h3 className="font-bold text-lg text-brand md:text-2xl lg:line-clamp-1 lg:text-3xl">{name}</h3>
        <p className="text-base mt-3 lg:line-clamp-4">{description}</p>
      </div>
      <Slider techList={techList} parentWidth={fieldWidth} onParentWidthChange={handleParentWidthChange} />
    </CardWrapper>
  );
}

export default FieldCard;
