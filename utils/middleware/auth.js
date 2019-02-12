import passport from 'passport';
import middlewareHelper from '../helpers/middlewareHelper';
import { protectedRoutes, mixedRoutes } from '../constants/api';

function shouldDeserialize(req, res, next) {
  const {
    path,
    headers: { authorization: token },
  } = req;

  // if (protectedRoutes.indexOf(path) !== -1) {
  if (middlewareHelper.includes(path, protectedRoutes)) {
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }

  if (token && mixedRoutes.indexOf(path) !== -1) {
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }

  return next();
}

export { shouldDeserialize };
