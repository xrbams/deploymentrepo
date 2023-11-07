import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCards } from 'swiper';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import classNames from 'classnames';

import { IProject } from './Interface';

interface IVerticalSlideShowProps {
  className?: string;
  projects: IProject[];
  slideShowRef: React.MutableRefObject<SwiperType | null>;
}

const SliderWrap = styled.div.attrs((props) => ({
  className: classNames('h-[600px] w-full', props.className),
}))`
  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface IImgWrapperProps {
  src: string;
}

const ImgWrapper = styled.div.attrs((props) => ({
  className: classNames('w-full h-full', props.className),
}))<IImgWrapperProps>`
  & {
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
  }
`;

function VerticalSlideShow({ className = '', projects, slideShowRef }: IVerticalSlideShowProps) {
  return (
    <SliderWrap className="">
      <Swiper
        allowTouchMove={false}
        onSwiper={(swiper) => {
          if (slideShowRef !== null) {
            slideShowRef.current = swiper;
          }
        }}
        effect={'cards'}
        cardsEffect={{
          rotate: false,
          perSlideOffset: 15,
        }}
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={true}
        direction={'vertical'}
        modules={[EffectCards]}
        className="h-full w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ImgWrapper src={project.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrap>
  );
}

export default VerticalSlideShow;
