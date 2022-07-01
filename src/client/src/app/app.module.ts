import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './ServerComponent/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ServerComponent, SuccessAlertComponent, WarningAlertComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
