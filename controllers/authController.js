import bcrypt from 'bcryptjs';
import { handleError } from '../utils/helpers/expressHelper';

async function signup(req, res) {
  const { db } = req.app;
  const { name, email, password, password2 } = req.body;

  try {
    if (password !== password2) {
      res.status(401);
      throw Error('Passwords are differents');
    }

    const user = await db('user')
      .first()
      .where('email', email);

    if (user) {
      res.status(403);
      throw Error('The email has already been used');
    }

    const userData = { name, email, password: bcrypt.hashSync(password, 10) };

    await db('user').insert(userData);

    return res.json({ message: 'The user has been created successfully' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function signin(req, res) {
  const { db } = req.app;

  try {
    return res.json('signin');
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(400).json(errorMessage);
  }
}

export default {
  signup,
  signin,
};
