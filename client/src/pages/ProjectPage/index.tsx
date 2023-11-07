import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { IconBrand } from '~/components/Icons';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import * as Io5Icons from 'react-icons/io5';

import { supabase } from '~/services/supabaseClient';
import routes from '~/configs/routes';

export interface IDetailedProject {
  id: number;
  date: string;
  name: string;
  field: string;
  shortdescription: string;
  description: string;
  technologies: string[];
  image: string;
  repo: string;
}

const GradientBackground = styled.div.attrs((props) => ({
  className: classNames('absolute h-full w-full bg-gradient-to-r from-zinc-800 to-transparent', props.className),
}))``;

export default function ProjectPage() {
  const { projectId } = useParams();
  const [project, setProject] = React.useState<IDetailedProject>();

  const handleFetchProject = useCallback(async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*').eq('id', projectId);
      let convertedData: IDetailedProject;
      if (data) {
        convertedData = data[0] as IDetailedProject;
        setProject(convertedData);
      }
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }, [projectId]);

  useEffect(() => {
    handleFetchProject();
  }, [projectId, handleFetchProject]);

  return (
    <div className="w-full h-fit flex flex-col">
      <div className=" h-[636px] w-full flex flex-col relative overflow-hidden ">
        <div className="absolute top-0 z-20 p-6 md:px-12 md:py-8 lg:p-6 h-fit">
          <IconBrand className="block w-60 h-12 text-white" />
        </div>
        <GradientBackground />
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full bg-center"
            src={`https://wsgamiiircgolprphhna.supabase.co/storage/v1/object/public/project_images${project?.image}`}
            alt={project?.name}
          />
        </div>
        <div className="absolute w-3/4 lg:w-2/3 bottom-[16%] left-1/2 -translate-x-1/2 text-white">
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-8">{project?.name}.</h3>
        </div>
      </div>
      <div className="w-full flex justify-center py-8 bg-[#f9f9f9]">
        <div className="w-3/4 lg:w-2/3  flex flex-col sm:flex-row items-center justify-around">
          <div className="flex flex-col items-center lg:items-start  text-faded">
            <h3 className="text-xl font-semibold">Client</h3>
            <p className="text-sm mt-1">TAMK</p>
          </div>
          <div className="flex flex-col items-center lg:items-start mt-6 sm:mt-0 text-faded">
            <h3 className="text-xl font-semibold">Timeline</h3>
            <p className="text-sm mt-1">{project?.date}</p>
          </div>
          <div className="flex flex-col items-center lg:items-start mt-6 sm:mt-0 text-faded">
            <h3 className="text-xl font-semibold">Field</h3>
            <p className="text-sm mt-1 capitalize">{project?.field}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-3/4 lg:w-2/3  py-20">
          <h1 className="text-7xl font-bold text-black">Project details</h1>
          <p className="text-faded leading-loose mt-8">{project?.description}</p>
          <div className="w-full mt-14">
            <img
              className="w-full bg-center"
              src={`https://wsgamiiircgolprphhna.supabase.co/storage/v1/object/public/project_images${project?.image}`}
              alt={project?.name}
            />
          </div>
          <div className="flex flex-col mt-12">
            <h3 className="text-2xl font-bold">Main tech stacks:</h3>
            <ul className="pl-4">
              {project?.technologies.map((tech) => (
                <li key={tech} className="text-faded leading-loose">
                  &#x2022; <p className="inline ml-2 capitalize">{tech}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-12">
            <h3 className="text-2xl font-bold">Repository:</h3>
            {project?.repo ? (
              <a href={project?.repo} target="_blank" rel="noreferrer">
                <p className="text-faded leading-loose underline hover:text-blue-600 transition-colors">
                  {project?.repo}
                </p>
              </a>
            ) : (
              <p> Update soon !</p>
            )}
          </div>
          <div className="w-full flex justify-center  p-2 hover:cursor-pointer text-white text-3xl mt-20">
            <Link to={routes.projects}>
              <Io5Icons.IoArrowBackCircleOutline className="text-black/70 hover:text-black text-6xl  lg:text-7xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
