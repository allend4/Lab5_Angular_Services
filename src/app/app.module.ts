import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { MorgageComponent } from './morgage/morgage.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    MorgageComponent,
    MortgageComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
