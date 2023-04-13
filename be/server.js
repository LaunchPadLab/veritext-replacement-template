

import { App } from './app.js';
import { HealthRoute } from './src/routes/health.routes.js';
import { UserRoute } from './src/routes/user.routes.js';
import { FolderRoute } from './src/routes/folder.routes.js';
import { FileRoute } from './src/routes/file.routes.js';

// ValidateEnv();

const app = new App([new HealthRoute(), new UserRoute(), new FolderRoute(), new FileRoute()]);

app.listen();
