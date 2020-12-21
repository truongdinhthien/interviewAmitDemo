using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public abstract class BaseModel<TKey>
    {
        public TKey Id { get; set; }
    }
}
