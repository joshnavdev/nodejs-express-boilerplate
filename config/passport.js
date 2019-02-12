import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import config from './config';

export default (app, passport) => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.app.authSecretKey,
      },
      (jwtPayload, done) => {
        // Here can I get user data from database?
        done(null, jwtPayload);
      },
    ),
  );
};
