import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterLoginModule } from './modules/register-login';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './shared/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from './modules/customer';
import { CreditCardComponent } from './shared/components/credit-card/credit-card.component';
import { ComponentsModule } from './shared/components';
@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    ComponentsModule,
    RegisterLoginModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
