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
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { InputsManageComponent } from './inputs-manage/inputs-manage.component';
import { ChangeOutputDialog, OutputsManageComponent } from './outputs-manage/outputs-manage.component';
import { RtuManageComponent } from './rtu-manage/rtu-manage.component';
import { DBManagerComponent } from './dbmanager/dbmanager.component';
import { NumberRangePipe } from './number-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrendingPageComponent,
    ManagerPageComponent,
    InputsManageComponent,
    OutputsManageComponent,
    ChangeOutputDialog,
    RtuManageComponent,
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
