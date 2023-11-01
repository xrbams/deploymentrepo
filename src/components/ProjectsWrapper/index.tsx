import Projects from './Projects';

interface IProjectWrapperProps {
  state: string[];
}

function ProjectWrapper({ state }: IProjectWrapperProps) {
  return (
    <div className="w-4/5 bg-slate-300 min-h-screen h-full">
      <Projects state={state} />
    </div>
  );
}

export default ProjectWrapper;
