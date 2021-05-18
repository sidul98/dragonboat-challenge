import ProjectsService from "./projects.service";

export default class {
  getOne = (id) => {
    const service = new ProjectsService();

    return service.getOne(id);
  };

  get = () => {
    const service = new ProjectsService();

    return service.getAll();
  };

  add = (project) => {
    const service = new ProjectsService();

    return service.add(project);
  };

  remove = (id) => {
    const service = new ProjectsService();

    return service.remove(id);
  };

  edit = (project) => {
    const service = new ProjectsService();

    return service.edit(project);
  };
}
