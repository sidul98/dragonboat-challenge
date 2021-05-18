import Projects from "db/projects";
import Service from "../utils/Service";

import ObjectDoesNotExistError from "../utils/exceptions/ObjectDoesNotExistError";

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id });
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };

  getAll = () => {
    return Projects.findAll();
  };

  add = (project) => {
    return Projects.addOne(project);
  };

  remove = (id) => {
    return Projects.deleteOne(id);
  };

  edit = (project) => {
    return Projects.editOne(project);
  };
}
