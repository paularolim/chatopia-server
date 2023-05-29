import { Router } from 'express';
import { auth } from '../config/firebase';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default (router: Router): void => {
  router.post('/register', async (request, response) => {
    if (!request.body?.name) {
      return response.status(400).json({ message: 'name is required' });
    }
    if (!request.body?.email) {
      return response.status(400).json({ message: 'e-mail is required' });
    }
    if (!request.body?.password) {
      return response.status(400).json({ message: 'password is required' });
    }

    const { name, password } = request.body;
    const email = request.body.email.toLowerCase();

    if (name.length < 5) {
      return response.status(400).json({ message: 'name must be at least 5 characters long' });
    }
    if (!emailRegex.test(email)) {
      return response.status(400).json({ message: 'invalid e-mail' });
    }
    if (password.length < 6) {
      return response.status(400).json({ message: 'password must be at least 6 characters long' });
    }

    const user = { displayName: name, email, password };

    return auth
      .createUser(user)
      .then((result) => response.json({ message: 'endpoint in progress', user, result }))
      .catch((error) => {
        if (
          error?.message &&
          error?.message === 'The email address is already in use by another account.'
        ) {
          return response.status(400).json({ message: 'the e-mail address is already in use' });
        }

        return response.status(500).json({ message: 'something went wrong' });
      });
  });
};
