import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ROUTES } from './user.routes';

import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserProfileComponent,
    UserFilterComponent,
    UserGridComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class UserModule { }
