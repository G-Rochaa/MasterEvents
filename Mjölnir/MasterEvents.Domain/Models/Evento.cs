using System;
using System.Collections;
using System.Collections.Generic;

namespace MasterEvents.Domain.Models
{
    public class Evento
    {
        public int Id { get;  set; }
        public string Local { get; set; }
        public DateTime? DataEvento { get;  set; }
        public string Tema { get;  set; }
        public int QtdPessoas { get; set; }
        public string ImageUrl { get; set; }
        public string Telefone  { get; set; }
        public string Email { get; set; }
        public IEnumerable<Lote> Lotes { get; set; }
        public IEnumerable<RedeSocial> RedesSociais { get; set; }
        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }

    }
}
