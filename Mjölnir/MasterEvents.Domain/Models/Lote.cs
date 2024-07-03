using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MasterEvents.Domain.Models
{
    public class Lote
    {
        public int Id { get; set; }
        public int EventoId { get; set; }
        public string Nome { get; set; }
        public float Preco { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public int Quantidade { get; set; }
        public Evento Evento { get; set; }
    }
}
