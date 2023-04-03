

import { App } from './app.js';
import { UserRoute } from './src/routes/user.routes.js';

// ValidateEnv();

const app = new App([new UserRoute()]);

app.listen();