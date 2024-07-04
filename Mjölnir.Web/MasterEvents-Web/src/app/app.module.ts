//Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';



//Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './components/Contatos/Contatos.component';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import { EventosComponent } from './components/Eventos/Eventos.component';
import { PalestrantesComponent } from './components/Palestrantes/Palestrantes.component';
import { PerfilComponent } from './components/Perfil/Perfil.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/Titulo/Titulo.component';

//Service
import { EventoService } from './services/evento.service';

//Pipe
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';

@NgModule({
  declarations: [		
    AppComponent,
    ContatosComponent,
    DashboardComponent,
    EventosComponent,
    PalestrantesComponent,
    PerfilComponent,
    NavComponent,
    DateTimeFormatPipe,
    TituloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar : true
    }),
    NgxSpinnerModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
