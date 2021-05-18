// This model mocks a real database model for the sake com simplicity
var mongoose = require("mongoose");
var ProjectEntity = require("./models/project");
const data = [
  {
    id: 1,
    title: "Project 1",
    author: "André Ribeiro",
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 2,
    title: "Project 2",
    author: "Johnny Doe",
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 3,
    title: "Project 3",
    author: "Mary Lane",
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 4,
    title: "Project 4",
    author: "Jake Needle",
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    id: 5,
    title: "Project 5",
    author: "Eden Map",
    start_date: new Date(),
    end_date: new Date(),
  },
];
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
      return data
        .filter((obj) =>
          Object.entries(conditions).reduce((curr, [key, condition]) => {
            if (!curr) return false;
            return obj[key] === condition;
          }, true)
        )
        .sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  };

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = (conditions = {}) => {
    return data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false;
        return obj[key] === condition;
      }, true)
    );
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
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
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

  // You can add more methods to this mock to extend its functionality or
  // rewrite it to use any kind of database system (eg. mongo, postgres, etc.)
  // it is not part of the evaluation process
  /**
   *
   */
}
