const Project = require("../models/Project");

const getProjects = async (req, res) => {
  const projects = await Project.find({});
  return res.status(200).json(projects);
};

module.exports = {
  getProjects,
};
