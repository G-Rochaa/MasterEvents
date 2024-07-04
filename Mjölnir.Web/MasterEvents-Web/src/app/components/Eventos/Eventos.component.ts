import { ToastrService } from 'ngx-toastr';
import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'console';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
  
})
export class EventosComponent implements OnInit {
  modalRef = {} as BsModalRef;

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public widthImg = 180;
  public marginImg = 10;
  public showImage = true;
  private _filtroListado = "";

  public get filtroLista() : string{
    return this._filtroListado;
  }

  public set filtroLista(value: string){
    this._filtroListado = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos; 
  }


  public filtrarEventos(filtrarPor: string): Evento[]{
    filtrarPor =  filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento : any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !==-1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService : EventoService, 
    private modalService: BsModalService, 
    private toastr: ToastrService,
    private spinner: NgxSpinnerService)
   { }

  public ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  public alterarEstadoImagem() : void{
    this.showImage = !this.showImage;
  }

  public getEventos(): void{
     this.eventoService.getEventos().subscribe(
       (_eventos : Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
       },
      error => {
        this.spinner.hide();
        this.toastr.error('Error to loading the events', 'Error');
      }
     );
  }

  openModal(template: TemplateRef<any>) : void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.modalRef.hide();
    this.toastr.success('The Event has deleted', 'Deleted!!');
  }
 
  decline(): void {
    this.modalRef.hide();
  }

} 