// main entry point
import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders
    ,{provide: LocationStrategy, useClass: HashLocationStrategy}
])
.catch(err => console.error(err));