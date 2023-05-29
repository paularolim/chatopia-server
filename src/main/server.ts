import { app } from './config/app';
import { env } from './config/env';

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${env.port}`);
});
