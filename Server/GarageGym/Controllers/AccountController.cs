using GarageGym.Data;
using GarageGym.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarageGym.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly MyDbContext _context;
        public AccountController(MyDbContext context)
        {
            _context = context;
        }
        // GET: api/<AccountController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AccountController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Getuser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/<AccountController>
        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] Login user)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'MyDBContext.Users'  is null.");
            }

            int? userId = _context.Users.FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password)?.Id;           
           
            if(userId != null)
            {
                var findUser = await _context.Users.FindAsync(userId);
                return findUser;
            }
           
             return NotFound();
        }

        // PUT api/<AccountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
