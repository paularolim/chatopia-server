import { Router } from 'express';
import { adaptRoute } from '../adapters/express/express-route-adapter';
import { makeRegisterController } from '../factories/register/register';

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterController()));
};
