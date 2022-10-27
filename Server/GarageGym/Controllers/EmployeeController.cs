using GarageGym.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;


namespace GarageGym.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
            select EmployeeId,
            EmployeeName ,
            Department,
            convert(varchar(10), DateOfJoining, 120) as DateOfJoining, PhotoFileName
            from dbo.Employee";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;

            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Employee dep)
        {
            string query = @"
            insert into dbo.Employee
(EmployeeName, Department, DateOfJoining, PhotoFileName)
            values (@EmployeeName, @Department, @DateOfJoining, @PhotoFileName)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;

            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeName", dep.EmployeeName);
                    myCommand.Parameters.AddWithValue("@Department", dep.Department);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", dep.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", dep.PhotoFileName);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Employee dep)
        {
            string query = @"
            update dbo.Employee
            set 
            EmployeeName = @EmployeeName
            Department = @Department
            DateOfJoining = @DateOfJoining
            PhotoFileName = @PhotoFileName
            where EmployeeId=@EmployeeId
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;

            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeId", dep.EmployeeId);

                    myCommand.Parameters.AddWithValue("@EmployeeName", dep.EmployeeName);
                    myCommand.Parameters.AddWithValue("@Department", dep.Department);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", dep.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", dep.PhotoFileName);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
            delete from dbo.Employee            
            where EmployeeId=@EmployeeId
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;

            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos" + fileName;
                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(fileName);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }
    }
}

