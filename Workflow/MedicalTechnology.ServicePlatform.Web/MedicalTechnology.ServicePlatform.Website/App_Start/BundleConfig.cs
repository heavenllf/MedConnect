using System.Web;
using System.Web.Optimization;

namespace MedicalTechnology.ServicePlatform.Website
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/other/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/bootstrap.js",
                      "~/Scripts/other/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap/bootstrap.css",
                      "~/Content/bootstrap/bootstrap.min.css",
                      "~/Content/bootstrap/bootstrap-responsive.min.css",
                      "~/Content/site.css"
                      ));
            bundles.Add(new StyleBundle("~/Content/themes").Include(
              "~/Content/themes/metro/easyui.css",
              "~/Content/themes/icon.css",
              "~/Content/jquery-ui-themes/themes/redmond/jquery-ui.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/easyui").Include(
                      "~/Scripts/easyui/jquery.easyui.min-1.4.1.js",
                      "~/Scripts/locale/easyui-lang-zh_CN.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryUI").Include(
          "~/Scripts/jquery-ui/jquery-ui.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                      "~/Scripts/Main.js",
                      "~/Scripts/leftmenu.js"));

            bundles.Add(new StyleBundle("~/Content/main/css").Include(
                      "~/Content/Main.css",
                      "~/Content/Order.css"));
            // 将 EnableOptimizations 设为 false 以进行调试。有关详细信息，
            // 请访问 http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
