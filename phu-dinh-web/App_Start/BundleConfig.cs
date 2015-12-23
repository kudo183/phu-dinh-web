using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace phu_dinh_web.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/ajaxlogin").Include(
                "~/Scripts/ajaxlogin.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                        "~/Scripts/knockout-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/view").Include(
                        "~/Scripts/app/defineNamespace.js",
                        "~/Scripts/app/datacontext.js",
                        "~/Scripts/app/utilsDOM.js",
                        "~/Scripts/app/view/headerMenuView.js",
                        "~/Scripts/app/view/xuatView.js",
                        "~/Scripts/app/view/tonKhoView.js"));

            bundles.Add(new ScriptBundle("~/bundles/viewModel").Include(
                        "~/Scripts/app/viewModel/xuatViewModel.js",
                        "~/Scripts/app/viewModel/tonKhoViewModel.js"));

            bundles.Add(new ScriptBundle("~/bundles/test").Include(
                        "~/Scripts/app/defineNamespace.js",
                        "~/Scripts/app/datacontext.js",
                        "~/Scripts/app/utilsDOM.js",
                        "~/Scripts/app/viewModel/testViewModel.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Site.css"));
        }
    }
}