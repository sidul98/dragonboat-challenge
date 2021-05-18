// This model mocks a real database model for the sake com simplicity
var mongoose = require("mongoose");
var ProjectEntity = require("./models/project");

export default class {
  // receives conditions like { title: 'Project 5' } and returns a list of matches
  static findAll = async (conditions = {}) => {
    try {
      var results = await ProjectEntity.find({});
      return results.map((res) => {
        const { _id, title, author, start_date, end_date } = res;
        return { id: _id, title, author, start_date, end_date };
      });
    } catch (err) {
      return [];
    }
  };

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = async (conditions = {}) => {
    var result = await ProjectEntity.findOne(conditions);
    if (!result) return null;
    const { _id, title, author, start_date, end_date } = result;

    return {
      id: _id,
      title,
      author,
      start_date,
      end_date,
    };
  };

  static addOne = (project = {}) => {
    const projectToAdd = new ProjectEntity({
      id: mongoose.Types.ObjectId(),
      title: project.title,
      author: project.author,
      start_date: project.start_date,
      end_date: project.end_date,
    });

    projectToAdd
      .save()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return null;
      });
  };

  static deleteOne = (id) => {
    ProjectEntity.deleteOne({ _id: id }).then((onfulfilled) => {
      return !!onfulfilled.ok;
    });
  };

  static editOne = (project) => {
    ProjectEntity.updateOne({ _id: project.id }, project).then(
      (onfulfilled) => {
        return !!onfulfilled.ok;
      }
    );
  };
}
