

import { App } from './app.js';
import { HealthRoute } from './src/routes/health.routes.js';
import { UserRoute } from './src/routes/user.routes.js';

// ValidateEnv();

const app = new App([new HealthRoute(), new UserRoute()]);

app.listen();
