import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';

import { IndexComponent } from './components/index/index.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { EducacaoescolasComponent } from './components/educacaoescolas/educacaoescolas.component';
import { InfluenciadiaadiaComponent } from './components/influenciadiaadia/influenciadiaadia.component';
import { GrandesnomesComponent } from './components/grandesnomes/grandesnomes.component';
import { ContatoComponent } from './components/contato/contato.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    RodapeComponent,
    EducacaoescolasComponent,
    InfluenciadiaadiaComponent,
    GrandesnomesComponent,
    ContatoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
