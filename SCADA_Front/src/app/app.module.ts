import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/environment/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { DBManagerComponent } from './dbmanager/dbmanager.component';
import { NumberRangePipe } from './number-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrendingPageComponent,
    DBManagerComponent,
    NumberRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
