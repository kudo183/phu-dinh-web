﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class PhuDinhEntities : DbContext
    {
        public PhuDinhEntities()
            : base("name=PhuDinhEntities")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<rBaiXe> rBaiXes { get; set; }
        public DbSet<rCanhBaoTonKho> rCanhBaoTonKhoes { get; set; }
        public DbSet<rChanh> rChanhs { get; set; }
        public DbSet<rDiaDiem> rDiaDiems { get; set; }
        public DbSet<rKhachHang> rKhachHangs { get; set; }
        public DbSet<rKhachHangChanh> rKhachHangChanhs { get; set; }
        public DbSet<rKhoHang> rKhoHangs { get; set; }
        public DbSet<rLoaiChiPhi> rLoaiChiPhis { get; set; }
        public DbSet<rLoaiHang> rLoaiHangs { get; set; }
        public DbSet<rLoaiNguyenLieu> rLoaiNguyenLieux { get; set; }
        public DbSet<rMatHangNguyenLieu> rMatHangNguyenLieux { get; set; }
        public DbSet<rNuoc> rNuocs { get; set; }
        public DbSet<rNguyenLieu> rNguyenLieux { get; set; }
        public DbSet<rNhaCungCap> rNhaCungCaps { get; set; }
        public DbSet<rNhanVien> rNhanViens { get; set; }
        public DbSet<rPhuongTien> rPhuongTiens { get; set; }
        public DbSet<tCongNoKhachHang> tCongNoKhachHangs { get; set; }
        public DbSet<tChiPhi> tChiPhis { get; set; }
        public DbSet<tChiTietChuyenHangDonHang> tChiTietChuyenHangDonHangs { get; set; }
        public DbSet<tChiTietChuyenKho> tChiTietChuyenKhoes { get; set; }
        public DbSet<tChiTietDonHang> tChiTietDonHangs { get; set; }
        public DbSet<tChiTietNhapHang> tChiTietNhapHangs { get; set; }
        public DbSet<tChiTietToaHang> tChiTietToaHangs { get; set; }
        public DbSet<tChuyenHang> tChuyenHangs { get; set; }
        public DbSet<tChuyenHangDonHang> tChuyenHangDonHangs { get; set; }
        public DbSet<tChuyenKho> tChuyenKhoes { get; set; }
        public DbSet<tDonHang> tDonHangs { get; set; }
        public DbSet<tGiamTruKhachHang> tGiamTruKhachHangs { get; set; }
        public DbSet<tMatHang> tMatHangs { get; set; }
        public DbSet<tNhanTienKhachHang> tNhanTienKhachHangs { get; set; }
        public DbSet<tNhapHang> tNhapHangs { get; set; }
        public DbSet<tNhapNguyenLieu> tNhapNguyenLieux { get; set; }
        public DbSet<tPhuThuKhachHang> tPhuThuKhachHangs { get; set; }
        public DbSet<tToaHang> tToaHangs { get; set; }
        public DbSet<tTonKho> tTonKhoes { get; set; }
        public DbSet<ThamSoNgay> ThamSoNgays { get; set; }
    }
}
