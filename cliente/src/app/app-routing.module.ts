
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { CreditsUserComponent } from './components/credits-user/credits-user.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logout/:sure', component: HomeComponent},
  { path: 'user-dashboard', component: DasboardComponent, 
    canActivate: [AuthGuardService],
    children: [
        {
          path: 'credits-form-user',
          component: CreditsUserComponent,
          
        },
        {
          path: 'credits-list-user',
          component: ListComponent,
        }
    ] 
  },
  { path:'register', component: RegisterComponent},
  { path: '**', component: HomeComponent },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
