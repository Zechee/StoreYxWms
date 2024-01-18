using Microsoft.AspNetCore.Mvc;

namespace StoreYxWms.Controllers
{
    public class RoutingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}