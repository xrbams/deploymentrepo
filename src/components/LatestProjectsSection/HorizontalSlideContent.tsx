import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as Io5Icons from 'react-icons/io5';
import * as SiIcons from 'react-icons/si';
import { TfiNewWindow } from 'react-icons/tfi';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import { IProject } from './Interface';

interface IHorizontalSlideContentProps {
  projects: IProject[];
  contentRef: React.MutableRefObject<SwiperType | null>;
}

function HorizontalSlideContent({ projects, contentRef }: IHorizontalSlideContentProps) {
  return (
    <Swiper
      allowTouchMove={false}
      className="basis-1/3 w-full"
      onSwiper={(swiper) => {
        if (contentRef !== null) {
          contentRef.current = swiper;
        }
      }}
      slidesPerView={'auto'}
      loop={true}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <img
            className="w-full aspect-video object-cover mb-12 rounded-2xl lg:hidden"
            src={project.img}
            alt={project.title}
          />
          <div className="bg-white ml-8 mt-4 relative before:absolute before:-top-4 before:-bottom-1 before:-left-8 before:w-[3px] before:rounded-lg before:bg-brand">
            <h1 className="text-xl md:text-2xl font-semibold flex justify-between">
              <p>{project.title}</p>
              <TfiNewWindow className="mr-2 cursor-pointer hover:text-brand transition-colors text-xl md:text-2xl" />
            </h1>
            <h4 className="text-lg text-brand font-medium mt-2 mb-4 md:font-semibold">{project.field}</h4>
            <p className="text-base font-normal md:font-medium">{project.content}</p>
            <div className="flex mt-6">
              {project.technologies.map((techonology, index) => (
                <div key={index} className="pr-6">
                  <techonology.icon className={`text-[${techonology.color}] w-9 h-9 md:w-12 md:h-12`} />
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HorizontalSlideContent;
