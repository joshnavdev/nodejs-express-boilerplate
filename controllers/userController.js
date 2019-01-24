import mongoose from 'mongoose';
import { handleError } from '../utils/helpers/resHandle';

async function getAll(req, res) {
  const User = mongoose.model('User');

  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(400).json(errorMessage);
  }
}

async function createOne(req, res) {
  const { name, age } = req.body;
  const User = mongoose.model('User');

  try {
    const newUser = await User.create({ name, age });

    return res.json(newUser);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(400).json(errorMessage);
  }
}

export default {
  getAll,
  createOne,
};
