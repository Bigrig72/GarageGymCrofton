using GarageGym.Data;
using GarageGym.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.SqlClient;

namespace GarageGym.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly MyDbContext _context;

        public DepartmentController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> Get()
        {
            if (_context.Department == null)
            {
                return NotFound();
            }

            return await _context.Department.ToListAsync();
        }

        //[HttpPost]
        //public JsonResult Post(Department dep)
        //{
        //    string query = @"
        //    insert into dbo.Department
        //    values (@DepartmentName)";

        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
        //    SqlDataReader myReader;

        //    using (SqlConnection myConn = new SqlConnection(sqlDataSource))
        //    {
        //        myConn.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myConn))
        //        {
        //            myCommand.Parameters.AddWithValue("@DepartmentName", dep.DepartmentName);
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);
        //            myReader.Close();
        //            myConn.Close();
        //        }
        //    }

        //    return new JsonResult("Added Successfully");
        //}

        //[HttpPut]
        //public JsonResult Put(Department dep)
        //{
        //    string query = @"
        //    update dbo.Department
        //    set DepartmentName= @DepartmentName
        //    where DepartmentId=@DepartmentId
        //    ";

        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
        //    SqlDataReader myReader;

        //    using (SqlConnection myConn = new SqlConnection(sqlDataSource))
        //    {
        //        myConn.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myConn))
        //        {
        //            myCommand.Parameters.AddWithValue("@DepartmentId", dep.DepartmentId);
        //            myCommand.Parameters.AddWithValue("@DepartmentName", dep.DepartmentName);
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);
        //            myReader.Close();
        //            myConn.Close();
        //        }
        //    }

        //    return new JsonResult("Updated Successfully");
        //}

        //[HttpDelete("{id}")]
        //public JsonResult Delete(int id)
        //{
        //    string query = @"
        //    delete from dbo.Department            
        //    where DepartmentId=@DepartmentId
        //    ";

        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
        //    SqlDataReader myReader;

        //    using (SqlConnection myConn = new SqlConnection(sqlDataSource))
        //    {
        //        myConn.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myConn))
        //        {
        //            myCommand.Parameters.AddWithValue("@DepartmentId", id);
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);
        //            myReader.Close();
        //            myConn.Close();
        //        }
        //    }

        //    return new JsonResult("Deleted Successfully");
        //}
    }   
}

