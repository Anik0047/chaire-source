import React from "react";
import { Metadata } from 'next';
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import BannerPageComponent from "@/components/admin/banner/BannerPage";

export const metadata: Metadata = {
  title: "Dashboard | Banners",
  description:
    "This is banners page for admin",
  // other metadata
};

const BannersPage = () => {
  return <div>
    <PageBreadcrumb pageTitle="Banners" />

    <BannerPageComponent />
  </div>;
};

export default BannersPage;
