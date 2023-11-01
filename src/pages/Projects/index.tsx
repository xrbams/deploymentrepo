import { useState, useEffect } from 'react';

import ProjectWrappers from '~/components/ProjectsWrapper';
import SideBar from '~/components/SideBar';

function Projects() {
  const [fieldTags, setFieldTags] = useState<string[]>([]);
  return (
    <div className="flex justify-end">
      {/* SideBar */}
      <SideBar setState={setFieldTags} />
      {/* Projects show here */}
      <ProjectWrappers state={fieldTags} />
    </div>
  );
}

export default Projects;
