import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/Eventos/Eventos.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { PalestrantesComponent } from './components/Palestrantes/Palestrantes.component';
import { ContatosComponent } from './components/Contatos/Contatos.component';
import { PerfilComponent } from './components/Perfil/Perfil.component';

const routes: Routes = [
  {path: 'Eventos', component: EventosComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Palestrantes', component: PalestrantesComponent},
  {path: 'Contatos', component: ContatosComponent},
  {path: 'Perfil', component: PerfilComponent},
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'Dashboard', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
