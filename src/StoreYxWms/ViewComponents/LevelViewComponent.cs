using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using YL.Utils.Extensions;
using YL.Utils.Pub;

namespace StoreYxWms.ViewComponents
{
    public class LevelViewComponent : ViewComponent
    {
        public LevelViewComponent()
        {
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var list = await EnumExt.ToKVListLinq<PubLevel>().ToAsync();
            return View(list);
        }
    }
}