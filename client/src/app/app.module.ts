import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {APP_BASE_HREF} from "@angular/common";
import {HomepageComponent} from './homepage/homepage.component';
import {StandartHeaderComponent} from './standart-header/standart-header.component';
import {RequestCreditModalComponent} from './homepage/request-credit-modal/request-credit-modal.component';
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import { SendingMoneyModalComponent } from './homepage/sending-money-modal/sending-money-modal.component';
import { AllocateSafeModalComponent } from './homepage/allocate-safe-modal/allocate-safe-modal.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    StandartHeaderComponent,
    RequestCreditModalComponent,
    SendingMoneyModalComponent,
    AllocateSafeModalComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModalModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
