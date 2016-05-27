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
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui.min.js",
                        "~/Scripts/datepicker-vi.js"));

            bundles.Add(new ScriptBundle("~/bundles/ajaxlogin").Include(
                "~/Scripts/ajaxlogin.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                        "~/Scripts/knockout-{version}.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Scripts/app/lib/jsControl/release/*.js"));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                        "~/Scripts/app/defineNamespace.js",
                        "~/Scripts/app/webApiUrl.js",
                        "~/Scripts/app/datacontext.js",
                        "~/Scripts/app/utilsDOM.js"));

            bundles.Add(new ScriptBundle("~/bundles/viewModel").Include(
                        "~/Scripts/app/dataProvider/*DataProvider.js",
                        "~/Scripts/app/viewModel/*ViewModel.js"));

            bundles.Add(new ScriptBundle("~/bundles/view").Include(
                        "~/Scripts/app/view/*View.js",
                        "~/Scripts/app/view/_viewManager.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                        "~/Scripts/app/main.js"));

            bundles.Add(new ScriptBundle("~/bundles/test").Include(
                        "~/Scripts/jquery-ui.min.js",
                        "~/Scripts/app/defineNamespace.js",
                        "~/Scripts/app/datacontext.js",
                        "~/Scripts/app/utilsDOM.js",
                        "~/Scripts/app/viewModel/testViewModel.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/jquery-ui.min.css",
                "~/Scripts/app/lib/jsControl/release/huy.ko.binding.combobox.css",
                "~/Scripts/app/lib/jsControl/release/huy.control.datagrid.css",
                "~/Content/Site.css",
                "~/Content/headerMenu.css",
                "~/Content/*View.css",
                "~/Content/media.css"));
        }
    }
}