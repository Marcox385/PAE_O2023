import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserDataComponent } from './pages/users/user-data/user-data.component';
import { GalleryListComponent } from './pages/gallery/gallery-list/gallery-list.component';
import { CreateGalleryComponent } from './pages/gallery/create-gallery/create-gallery.component';
import { GalleryDataComponent } from './pages/gallery/gallery-data/gallery-data.component';
import { EditGalleryComponent } from './pages/gallery/edit-gallery/edit-gallery.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';
import { RoleGuard } from './shared/guards/role.guard';

// pathMatch (para coincidir con la ruta): full, prefix

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard, RoleGuard],
    children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDataComponent }
    ]
  },
  {
    path: 'photos', component: GalleryComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: GalleryListComponent },
      { path: 'create', component: CreateGalleryComponent },
      { path: ':id', component: GalleryDataComponent },
      { path: ':id/edit', component: EditGalleryComponent }
    ]
  },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
