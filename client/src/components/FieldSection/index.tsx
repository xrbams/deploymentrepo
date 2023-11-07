import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as Io5Icons from 'react-icons/io5';
import * as SiIcons from 'react-icons/si';
import { TbBrandReactNative, TbBrandCpp } from 'react-icons/tb';
import { MdSensors, MdGpsFixed } from 'react-icons/md';
import { PiVirtualReality } from 'react-icons/pi';

import { IField } from './Interface';
import FieldCard from './FieldCard';
import { Section } from '~/components/UI';

const FIELDS: IField[] = [
  {
    id: 1,
    name: 'Web Development',
    description:
      'Building fullstack web application with fully responsive web design, authentication and database features.',
    techList: [
      {
        name: 'CSS',
        Icon: DiIcons.DiCss3,
        color: 'text-[#3595cf]',
      },
      {
        name: 'JavaScript',
        Icon: Io5Icons.IoLogoJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'React',
        Icon: FaIcons.FaReact,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'Tailwind',
        Icon: SiIcons.SiTailwindcss,
        color: 'text-[#12c2b2]',
      },
      {
        name: 'NodeJS',
        Icon: FaIcons.FaNodeJs,
        color: 'text-[#7ec729]',
      },
      {
        name: 'Spring Boot',
        Icon: SiIcons.SiSpringboot,
        color: 'text-[#6aac3c]',
      },
      {
        name: 'MongoDB',
        Icon: DiIcons.DiMongodb,
        color: 'text-[#00e760]',
      },
      {
        name: 'Postgresql',
        Icon: SiIcons.SiPostgresql,
        color: 'text-[#336791]',
      },
      {
        name: 'AWS',
        Icon: SiIcons.SiAmazonaws,
        color: 'text-[#f79500]',
      },
    ],
  },
  {
    id: 2,
    name: 'Mobile Development',
    description: 'Building mobile application with cross-platform and also native solutions.',
    techList: [
      {
        name: 'React Native',
        Icon: TbBrandReactNative,
        color: 'text-[#5ed3f3]',
      },
      {
        name: 'JavaScript',
        Icon: SiIcons.SiJavascript,
        color: 'text-[#eed91b]',
      },
      {
        name: 'TypeScript',
        Icon: SiIcons.SiTypescript,
        color: 'text-[#007bcd]',
      },
      {
        name: 'Flutter',
        Icon: SiIcons.SiFlutter,
        color: 'text-[#47c5fb]',
      },
      {
        name: 'Dart',
        Icon: SiIcons.SiDart,
        color: 'text-[#04599c]',
      },
      {
        name: 'Android Studio',
        Icon: SiIcons.SiAndroidstudio,
        color: 'text-[#68a133]',
      },
      {
        name: 'Java',
        Icon: FaIcons.FaJava,
        color: 'text-[#db380e]',
      },
    ],
  },
  {
    id: 3,
    name: 'IoT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consequuntur laborum cum consequatur sequi consectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'C/C++',
        Icon: TbBrandCpp,
        color: 'text-[#3595cf]',
      },
      {
        name: 'Arduino',
        Icon: SiIcons.SiArduino,
        color: 'text-[#008f94]',
      },
      {
        name: 'Arduino',
        Icon: MdSensors,
        color: 'text-[#3595cf]',
      },
      {
        name: 'Raspberry Pi',
        Icon: SiIcons.SiRaspberrypi,
        color: 'text-[#db4739]',
      },
      {
        name: 'GPS',
        Icon: MdGpsFixed,
        color: 'text-[#f44336]',
      },
    ],
  },
  {
    id: 4,
    name: 'Game Development',
    description: 'et, conseconsectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'Unity',
        Icon: FaIcons.FaUnity,
        color: 'text-[#000]',
      },
      {
        name: 'VR',
        Icon: PiVirtualReality,
        color: 'text-[#eed91b]',
      },
      {
        name: 'C#',
        Icon: SiIcons.SiCsharp,
        color: 'text-[#b14796]',
      },
    ],
  },
  {
    id: 5,
    name: 'Machine Learning',
    description: 'et, conseconsectetur. Vel aspernatur reiciendis eaque explicabo?',
    techList: [
      {
        name: 'C/C++',
        Icon: TbBrandCpp,
        color: 'text-[#3595cf]',
      },
      {
        name: 'Arduino',
        Icon: SiIcons.SiArduino,
        color: 'text-[#008f94]',
      },
      {
        name: 'Micro Python',
        Icon: SiIcons.SiMicropython,
        color: 'text-[#3c3839]',
      },
    ],
  },
];

export default function FieldSection() {
  return (
    <Section id="fields" className="bg-brand/80 w-full">
      {/* content */}
      <div className="max-w-[1440px] mx-auto px-12">
        <div>
          <h6 className="text-lg mb-2 text-white font-medium">Fields</h6>
          <h1 className="text-2xl text-white font-semibold">What We Are Working On</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:gap-10">
          {FIELDS.map((field) => (
            <FieldCard key={field.id} name={field.name} description={field.description} techList={field.techList} />
          ))}
        </div>
      </div>
    </Section>
  );
}
