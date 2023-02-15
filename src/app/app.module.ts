import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from 'src/layout/container/container.component';
import { NavbarComponent } from 'src/layout/navbar/navbar.component';
import { HomeComponent } from 'src/modules/home/home.component';
import { FormsModule } from '@angular/forms';
import { CalculateComponent } from 'src/modules/calculate/calculate.component';
import { Whatis7ttComponent } from 'src/modules/whatis7tt/whatis7tt.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HomeComponent,
    CalculateComponent,
    Whatis7ttComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
