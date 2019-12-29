import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";

import { UIRouterModule } from "@uirouter/angular";
import { uiRouterConfigFn } from "./config/router.config.js";

import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "./main/dashboard/dashboard.component";

import { dashboardState, clientsState } from "./states";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { ClientsComponent } from "./main/clients/clients.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent, LeftNavComponent, ClientsComponent, TopNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    UIRouterModule.forRoot({
      states: [dashboardState, clientsState],
      useHash: false,
      config: uiRouterConfigFn
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {
    console.log("ue");
  }
}
