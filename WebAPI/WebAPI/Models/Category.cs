﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Category : BaseModel<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
