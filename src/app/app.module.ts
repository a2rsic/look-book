import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from './common/common.module';
import { TicketsComponent } from './tickets/tickets.component';
import { EventsComponent } from './events/events.component';
import { TicketsTitleComponent } from './tickets-title/tickets-title.component';
import { EventsTitleComponent } from './events-title/events-title.component';
import { TicketsGridViewComponent } from './tickets/tickets-grid-view/tickets-grid-view.component';
import { TicketsListViewComponent } from './tickets/tickets-list-view/tickets-list-view.component';
import { EventsListViewComponent } from './events/events-list-view/events-list-view.component';
import { EventsGridViewComponent } from './events/events-grid-view/events-grid-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    TicketsComponent,
    EventsComponent,
    TicketsTitleComponent,
    EventsTitleComponent,
    TicketsGridViewComponent,
    TicketsListViewComponent,
    EventsListViewComponent,
    EventsGridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
