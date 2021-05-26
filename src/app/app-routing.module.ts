import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {TransferComponent} from './components/transfer/transfer.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthguardGuard} from './Guards/authguard.guard';
import {EmptySpaceComponent} from './components/elements/empty-space/empty-space.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'transaction', component: TransactionComponent, canActivate: [AuthguardGuard]},
  {path: 'transfer', component: TransferComponent, canActivate: [AuthguardGuard]},
  {path: 'profile' , component: ProfileComponent, canActivate: [AuthguardGuard]},
  {path: 'checkpage', component: EmptySpaceComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
