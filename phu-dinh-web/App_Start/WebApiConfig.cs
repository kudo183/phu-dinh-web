using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Data;
using Microsoft.Data.Edm;
using Newtonsoft.Json.Serialization;

namespace phu_dinh_web.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            config.Routes.MapHttpRoute(
                name: "ActionApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // Uncomment the following line of code to enable query support for actions with an IQueryable or IQueryable<T> return type.
            // To avoid processing unexpected or malicious queries, use the validation settings on QueryableAttribute to validate incoming queries.
            // For more information, visit http://go.microsoft.com/fwlink/?LinkId=279712.
            //config.EnableQuerySupport();

            // To disable tracing in your application, please comment out or remove the following line of code
            // For more information, refer to: http://www.asp.net/web-api
            //config.EnableSystemDiagnosticsTracing();

            // Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.Routes.MapODataServiceRoute("odata", "odata", GetPhuDinhDataEntityEDM());

            // To avoid processing unexpected or malicious queries, use the validation settings on QueryableAttribute to validate incoming queries.
            // For more information, visit http://go.microsoft.com/fwlink/?LinkId=279712.
            config.AddODataQueryFilter();
        }

        private static IEdmModel _edmModel = null;
        public static IEdmModel GetPhuDinhDataEntityEDM()
        {
            if (_edmModel != null)
            {
                return _edmModel;
            }

            var builder = new ODataConventionModelBuilder { ContainerName = "PhuDinh_Context" };
            builder.EntitySet<rBaiXe>("rBaiXes").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rCanhBaoTonKho>("rCanhBaoTonKhos").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rChanh>("rChanhs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rDiaDiem>("rDiaDiems").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rKhachHangChanh>("rKhachHangChanhs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rKhachHang>("rKhachHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rKhoHang>("rKhoHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rLoaiChiPhi>("rLoaiChiPhis").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rLoaiHang>("rLoaiHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rLoaiNguyenLieu>("rLoaiNguyenLieus").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rMatHangNguyenLieu>("rMatHangNguyenLieus").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rNuoc>("rNuocs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rNguyenLieu>("rNguyenLieus").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rNhaCungCap>("rNhaCungCaps").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rNhanVien>("rNhanViens").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<rPhuongTien>("rPhuongTiens").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tCongNoKhachHang>("tCongNoKhachHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiPhi>("tChiPhis").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiTietChuyenHangDonHang>("tChiTietChuyenHangDonHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiTietChuyenKho>("tChiTietChuyenKhos").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiTietDonHang>("tChiTietDonHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiTietNhapHang>("tChiTietNhapHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChiTietToaHang>("tChiTietToaHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChuyenHang>("tChuyenHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChuyenHangDonHang>("tChuyenHangDonHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tChuyenKho>("tChuyenKhos").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tDonHang>("tDonHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tGiamTruKhachHang>("tGiamTruKhachHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tMatHang>("tMatHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tNhanTienKhachHang>("tNhanTienKhachHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tNhapHang>("tNhapHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tNhapNguyenLieu>("tNhapNguyenLieus").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tPhuThuKhachHang>("tPhuThuKhachHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tToaHang>("tToaHangs").EntityType.HasKey(p => p.Ma);
            builder.EntitySet<tTonKho>("tTonKhos").EntityType.HasKey(p => p.Ma);

            _edmModel = builder.GetEdmModel();
            return _edmModel;
        }
    }
}