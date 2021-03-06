import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { ClientsComponent } from "./main/clients/clients.component";
import { ClientComponent } from "./main/clients/client/client.component";
import { ClientlistComponent } from "./main/clients/clientlist/clientlist.component";

import { Transition } from "@uirouter/angular";

export const dashboardState = {
  name: "dashboard",
  url: "/dashboard",
  component: DashboardComponent
};

export const clientsState = {
  name: "clients",
  url: "/cients",
  component: ClientsComponent,
  redirectTo: "clients.clientlist"
};

export const clientState = {
  name: "clients.client",
  url: "/:id",
  component: ClientComponent
};

export const clientListState = {
  name: "clients.clientlist",
  url: "/",
  component: ClientlistComponent
};
