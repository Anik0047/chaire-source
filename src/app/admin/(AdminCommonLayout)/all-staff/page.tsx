import React from "react";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import StaffPageComponent from "@/components/admin/staff/StaffPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard | Staff",
  description:
    "This is staff page for admin",
  // other metadata
};

const AllStaffPage = () => {
  return <div>
    <PageBreadcrumb pageTitle="Staffs" />

    <StaffPageComponent />
  </div>;
};

export default AllStaffPage;
