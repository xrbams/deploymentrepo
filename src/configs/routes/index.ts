type TRoutes = {
  [pathName: string]: string;
};

const routes: TRoutes = {
  home: '/',
  projects: '/projects',
  project: '/projects/:projectId',
  upload: '/upload',
  login: '/login',
};

export default routes;
