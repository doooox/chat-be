import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  }
}
