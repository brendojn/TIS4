const question = require('../models/question');

const GetAll = async (req, res) => {
  try {
    return res.send(await question.find());
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const GetOneById = async (req, res) => {
  try {
    return res.send(await question.findById(req.params.id));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const UpdateById = async (req, res) => {
  try {
    const allFiles = req.files;
    const Obj = { ...req.body };
    console.log(allFiles);
    if (allFiles) {
      for (const key in allFiles) {
        Obj[key] = 'images/question/' + key + '/' + allFiles[key][0].filename;
      }
    }
    return res.send(
      await question.findOneAndUpdate({ _id: req.params.id }, Obj, {
        new: true,
      })
    );
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const Delete = async (req, res) => {
  try {
    return res.send(await question.remove({ _id: req.params.id }));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const Create = async (req, res) => {
  try {
    const allFiles = req.files;
    const Obj = { ...req.body };
    console.log(allFiles);
    if (allFiles) {
      for (const key in allFiles) {
        Obj[key] = 'images/question/' + key + '/' + allFiles[key][0].filename;
      }
    }

    return res.send(await question.create({ ...Obj }));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = {
  GetAll,
  GetOneById,
  UpdateById,
  Delete,
  Create,
};
