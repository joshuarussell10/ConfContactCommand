import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { UIRouterModule } from "@uirouter/angular";
import { uiRouterConfigFn } from "./config/router.config.js";
import { FlexLayoutModule } from "@angular/flex-layout";

import { dashboardState, clientsState, clientListState, clientState } from "./states";

import { TopNavComponent } from "./top-nav/top-nav.component";
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { ClientsComponent } from "./main/clients/clients.component";
import { ClientlistComponent } from "./main/clients/clientlist/clientlist.component";
import { ClientComponent } from "./main/clients/client/client.component";
import { ClientsService } from "./main/clients/clients.service";

@NgModule({
  declarations: [AppComponent, DashboardComponent, LeftNavComponent, ClientsComponent, TopNavComponent, ClientlistComponent, ClientComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    UIRouterModule.forRoot({
      states: [dashboardState, clientsState, clientListState, clientState],
      useHash: false,
      config: uiRouterConfigFn
    })
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
