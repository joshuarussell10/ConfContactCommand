import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { ClientsComponent } from "./main/clients/clients.component";

import { Transition } from "@uirouter/angular";

export const dashboardState = {
  name: "dashboard",
  url: "/dashboard",
  component: DashboardComponent
};

export const clientsState = {
  name: "clients",
  url: "/cients",
  component: ClientsComponent
  // redirectTo: "clients.clientslist"
};

// export const clientState = {
//   name: "clients.client",
//   url: "/:id",
//   component: ClientComponent
// };
//
// export const clientListState = {
//   name: "clients.clientlist",
//   url: "/list",
//   component: ClientlistComponent
// };
