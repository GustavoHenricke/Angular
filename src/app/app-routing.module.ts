import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { EducacaoescolasComponent } from './components/educacaoescolas/educacaoescolas.component';
import { GrandesnomesComponent } from './components/grandesnomes/grandesnomes.component';
import { InfluenciadiaadiaComponent } from './components/influenciadiaadia/influenciadiaadia.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'educacaoescolas', component: EducacaoescolasComponent},
  { path: 'grandesnomes', component: GrandesnomesComponent},
  { path: 'influenciadiaadia', component: InfluenciadiaadiaComponent},
  { path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
