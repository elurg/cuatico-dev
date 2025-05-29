import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Dashboard } from './app/view/dashboard/dashboard_estudiante';
bootstrapApplication(Dashboard, appConfig)
  .catch((err) => console.error(err));
