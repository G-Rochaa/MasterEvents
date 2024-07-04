import { Evento } from "./Evento";

export interface Lote {
    id : Number;
    eventoId : number;
    nome : string;
    preco : number;
    dataInicio? : Date;
    dataFim? : Date;
    quantidade : number;
    evento : Evento;
}
