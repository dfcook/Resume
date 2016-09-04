import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { removeNgStyles, createNewHosts } from "@angularclass/hmr";

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from "./environment";
import { ROUTES } from "./app.routes";
// App is our top level component
import { App } from "./app.component";

import { APP_COMPONENTS } from "./components/components";
import { APP_SERVICES } from "./services/services";
import { IsNullPipe } from "./pipes/isnull-pipe";

/**
 * `AppModule` is the main entry point into Angular2"s bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    IsNullPipe,
    APP_COMPONENTS
  ],
  imports: [ // import Angular"s modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular"s dependency injection
    ENV_PROVIDERS,
    APP_SERVICES
  ]
})
export class AppModule {
  constructor() {}
}
