using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace SessionApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
         // DELETE api/DeleteAll/
        [HttpGet("/DeleteAll")]
        public void DeleteAll()
        {
             if (HttpContext.Session.Get("BookmarkArr") == null) {
                return;
            }
            else {
                HttpContext.Session.Remove("BookmarkArr");              
            }
        }


        // GET api/Bookmarks
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {                  
            if (HttpContext.Session.Get("BookmarkArr") == null) {
                return null;
            }
            else {
                string str = HttpContext.Session.GetString("BookmarkArr");
                string[] BookmarkArr = str.Split('|');

                return BookmarkArr;
            }
        }


        // POST api/Bookmarks/
        [HttpPost]
        public void Post(object repo)
        {
             string BookmarkArr = null;
             string jasonRepo = JsonConvert.SerializeObject(repo);
                
            if (HttpContext.Session.Get("BookmarkArr") == null) {
                BookmarkArr = jasonRepo; 
            }
            else {
                BookmarkArr = HttpContext.Session.GetString("BookmarkArr");
                if (BookmarkArr.Contains(jasonRepo)) return;
                BookmarkArr = BookmarkArr + "|" + jasonRepo; 
            }
            
            HttpContext.Session.SetString("BookmarkArr",BookmarkArr);
            return;
        }

 /*
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

         */
    }
}
