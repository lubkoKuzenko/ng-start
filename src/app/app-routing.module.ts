import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
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
    path: "cards",
    loadChildren: () => import("./unit-cards/cards.module").then((m) => m.CardsModule),
  },
  {
    path: "patterns",
    loadChildren: () => import("./patterns/patterns.module").then((m) => m.PatternsModule),
  },
  {
    path: "unit-tests",
    loadChildren: () => import("./unit-tests/unit-tests.module").then((m) => m.UnitTestModule),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading, relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
