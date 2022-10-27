import { SubProgComponent } from './sub-prog/sub-prog.component';
import { OverviewComponent } from './overview/overview.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { ProgramsComponent } from './programs/programs.component';
import { CarWithDriverComponent } from './car-with-driver/car-with-driver.component';
import { FamousHotelsDetailsComponent } from './famous-hotels-details/famous-hotels-details.component';
import { TripsModule } from './modules/trips/trips.module';
import { FamousPlacesComponent } from './famous-places/famous-places.component';
import { FamoushotelsComponent } from './famoushotels/famoushotels.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CallusComponent } from './callus/callus.component';
import { TestCodeComponent } from './test-code/test-code.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'home',component:HomeComponent},
  {path:'flight-booking',component:FlightBookingComponent},
  { path:'home',
  loadChildren: () => import('./modules/trips/trips.module').then(m =>m.TripsModule) },
  {path:'callus',component:CallusComponent},
  {path:'hotels',component:HotelsComponent,children:[
    {path:'',redirectTo:'famous-hotels',pathMatch:'full'},
    {path:'famous-hotels',component:FamoushotelsComponent},
    {path:'famous-places',component:FamousPlacesComponent}
  ]}, //,canActivate:[AuthGuard]
  {path:'hotel/:id',component:FamousHotelsDetailsComponent},
  {path:'car-with-driver',component:CarWithDriverComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'programs/:id',component:ProgramsDetailsComponent,children:[
    {path:'overview',component:OverviewComponent},
    {path:'sub-prog',component:SubProgComponent},
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
