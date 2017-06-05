using System.Web;
using System.Web.Optimization;

namespace FirstVueJS
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            const string libBasePath = "~/assets/libs";

            bundles.Add(new ScriptBundle("~/bundles/core").Include(
                    $"{libBasePath}/requirejs/require.js",
                    $"{libBasePath}/requirejs/config.js"));

            bundles.Add(new StyleBundle("~/bundles/styles/theme").Include(
                    $"{libBasePath}/bootstrap/css/bootstrap.css",
                    "~/assets/css/site.css"));
        }
    }
}
