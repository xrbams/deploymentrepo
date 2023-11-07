export function convertToPathname(name: string) {
  return name.split(' ').join('-').toLowerCase();
}

export function convertPathnameToName(pathName: string) {
  return pathName.split('-').join(' ').toLowerCase();
}
