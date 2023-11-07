import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { supabase } from '~/services/supabaseClient';

import ProjectCard from './ProjectCard';

export interface IProject {
  id: number;
  date: string;
  description: string;
  shortdescription: string;
  field: string;
  image: string;
  name: string;
  repo: string;
  technologies: string[];
}

interface IProjectsProps {
  state: string[];
}

const Projects = ({ state }: IProjectsProps) => {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);

  const getProjects = useCallback(async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*');
      const convertedData = data as IProject[];
      setProjects(convertedData);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useLayoutEffect(() => {
    getProjects();
  }, [getProjects]);

  const handleFilterProjects = useCallback(() => {
    if (projects) {
      setFilteredProjects(
        projects.filter((project) => state.some((tag) => tag.toLowerCase() === project.field.toLowerCase())),
      );
    }
  }, [state, projects]);

  useEffect(() => {
    handleFilterProjects();
  }, [state, handleFilterProjects]);

  return (
    <div className="w-full px-6 py-20 flex flex-col items-center">
      <div className="flex flex-col mb-16">
        <h3 className="text-3xl font-bold text-center text-brand">TAMK Projects</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {filteredProjects.length > 0
          ? filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          : projects?.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  );
};

export default Projects;
