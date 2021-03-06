import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {produitComponent} from './Produit/produit.component';
import {ProduitMockService} from './Produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProduitService} from './Produit/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    produitComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProduitMockService,ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
