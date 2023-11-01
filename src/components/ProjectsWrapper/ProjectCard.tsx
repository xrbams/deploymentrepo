import { IProject } from './Projects';
import { Link } from 'react-router-dom';

import imagePlaceholder from '~/assets/images/image_placeholder.png';

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard(props: IProjectCardProps) {
  const { project } = props;
  const IMAGE_PLACEHOLDER = imagePlaceholder;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = IMAGE_PLACEHOLDER;
  };

  return (
    <Link to={project.id.toString()}>
      <div className="h-full relative top-0 transition-all bg-white shadow-md rounded-md overflow-hidden hover:-top-1 hover:cursor-pointer">
        <div className="rounded-3xl text-white">
          <div className="w-full h-36 overflow-hidden">
            <img
              className="block w-full bg-center transition-transform hover:scale-125"
              src={`https://wsgamiiircgolprphhna.supabase.co/storage/v1/object/public/project_images${project.image}`}
              alt={project.name}
              loading="eager"
              onError={handleImageError}
            />
          </div>
          <div className="p-4">
            <div className="">
              <p className="text-sm font-semibold text-brand line-clamp-1 capitalize">{project.field}</p>
              <h3 className="text-lg text-black font-semibold my-2 line-clamp-2">{project.name}</h3>
              <p className="text-sm text-black/50 line-clamp-3">{project.shortdescription}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
