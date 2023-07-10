import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/environment/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { InputsManageComponent } from './inputs-manage/inputs-manage.component';
import { ChangeOutputDialog, OutputsManageComponent } from './outputs-manage/outputs-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    TrendingPageComponent,
    ManagerPageComponent,
    InputsManageComponent,
    OutputsManageComponent,
    ChangeOutputDialog
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
