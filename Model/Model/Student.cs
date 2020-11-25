using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Baza.Model
{
    public class Student
    {
        public int StudentId { get; set; }
        [MaxLength(15)]
        public string Imie { get; set; }
        [MaxLength(15)]
        public string Nazwisko { get; set; }
        [MaxLength(11)]
        public string Pesel { get; set; }
        
    }
 
}
