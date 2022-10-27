using System.ComponentModel.DataAnnotations;

namespace GarageGym.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }

        public string? DepartmentName { get; set; }
    }
}
