import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "forms",
    pathMatch: "full",
  },
  {
    path: "forms",
    loadChildren: () => import("./forms/forms.module").then((m) => m.FormsModule),
  },
  {
    path: "dc",
    loadChildren: () => import("./dynamic-components/dc.module").then((m) => m.DCModule),
  },
  {
    path: "rx",
    loadChildren: () => import("./rxjs/rxjs.module").then((m) => m.RxjsModule),
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "patterns",
    loadChildren: () => import("./patterns/patterns.module").then((m) => m.PatternsModule),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading, relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
