import { SharedModule } from './shared/shared.module';
import { DefaultImage } from './default-image.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';



import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
import { ChangebgDirective } from './changebg.directive';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestCodeComponent } from './test-code/test-code.component';
import { TestCodeDetailsComponent } from './test-code-details/test-code-details.component';
import { HighlightDirective } from './highlight.directive';
import { AlertServiceService } from './alert-service.service';
import { CallusComponent } from './callus/callus.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FamoushotelsComponent } from './famoushotels/famoushotels.component';
import { FamousPlacesComponent } from './famous-places/famous-places.component';
import { FamousHotelsDetailsComponent } from './famous-hotels-details/famous-hotels-details.component';
import { CarWithDriverComponent } from './car-with-driver/car-with-driver.component';
import { SquarePipe } from './customPipe/square.pipe';
import { CarChildComponent } from './car-with-driver/car-child/car-child.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramsDetailsComponent } from './programs-details/programs-details.component';
import { SubProgComponent } from './sub-prog/sub-prog.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // HomeComponent ,
    ChangebgDirective,
    FlightBookingComponent,
    TestCodeComponent,
    TestCodeDetailsComponent,
    HighlightDirective,
    DefaultImage,
    CallusComponent,
    HotelsComponent,
    NotfoundComponent,
    FamoushotelsComponent,
    FamousPlacesComponent,
    FamousHotelsDetailsComponent,
    CarWithDriverComponent,
    SquarePipe,
    CarChildComponent,
    ProgramsComponent,
    ProgramsDetailsComponent,
    SubProgComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader:{
        provide: TranslateLoader,
        useFactory:creteTranslateLoader,
        deps:[HttpClient],
      }
    }),
    TranslateModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,

    MatDatepickerModule,
    MatFormFieldModule ,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SwiperModule,
    SharedModule,
    MatSelectModule

  ],
  exports:[ MatDatepickerModule,],
  providers: [MatFormFieldModule,MatDatepickerModule,AlertServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function creteTranslateLoader(http:HttpClient):any{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

