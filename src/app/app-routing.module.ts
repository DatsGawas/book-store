
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {RouterModule, Routes} from "@angular/router";
import {StoreLoadGuard} from "./services/guards/store-load.guard";
import {LoginComponent} from "./login/login.component";
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home',  canLoad : [StoreLoadGuard], loadChildren: './books-home/books.home.module#BooksHomeModule'
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreLoadGuard]
})
export class AppRoutingModule { }
