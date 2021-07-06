import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const ROUTES: Routes = [
  {
          path: '',
          component: LayoutComponent,
          children: [
                  { path: 'user-list', component: UserListComponent },
                  { path: 'user-edit', component: UserEditComponent },
                  { path: 'user-profile', component: UserProfileComponent },

          ]
  }
]