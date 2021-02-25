import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "forms",
    pathMatch: "full",
  },

  {
    path: "dc",
    loadChildren: () => import("./dynamic-components/dc.module").then((m) => m.DCModule),
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading, relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
