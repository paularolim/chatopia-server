import { Router } from 'express';

export default (router: Router): void => {
  router.post('/login', (_, response) => {
    response.json({ message: 'endpoint not implemented' });
  });
};
