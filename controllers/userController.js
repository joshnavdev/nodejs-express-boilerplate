import mongoose from 'mongoose';

async function getAll(req, res) {
  const User = mongoose.model('User');

  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
}

async function createOne(req, res) {
  const { name, age } = req.body;
  const User = mongoose.model('User');

  try {
    // const newUser = new User({ name, age });
    // const newUserSaved = await newUser.save();
    const newUser = await User.create({ name, age });

    return res.json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
}

export default {
  getAll,
  createOne,
};
