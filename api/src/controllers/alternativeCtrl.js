import {
  find,
  findById,
  findOneAndUpdate,
  remove,
  create,
} from '../models/alternative';

const GetAll = async (req, res) => {
  try {
    return res.send(await find());
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const GetOneById = async (req, res) => {
  try {
    return res.send(await findById(req.params.id));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const UpdateById = async (req, res) => {
  try {
    const allFiles = req.files;
    const Obj = {
      ...req.body,
    };
    console.log(allFiles);
    if (allFiles) {
      for (const key in allFiles) {
        Obj[key] = `images/alternative/${key}/${allFiles[key][0].filename}`;
      }
    }
    return res.send(
      await findOneAndUpdate(
        {
          _id: req.params.id,
        },
        Obj,
        {
          new: true,
        }
      )
    );
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const Delete = async (req, res) => {
  try {
    return res.send(
      await remove({
        _id: req.params.id,
      })
    );
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const Create = async (req, res) => {
  try {
    const allFiles = req.files;
    const Obj = {
      ...req.body,
    };
    console.log(allFiles);
    if (allFiles) {
      for (const key in allFiles) {
        Obj[key] = `images/alternative/${key}/${allFiles[key][0].filename}`;
      }
    }

    return res.send(
      await create({
        ...Obj,
      })
    );
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
export default {
  GetAll,
  GetOneById,
  UpdateById,
  Delete,
  Create,
};
