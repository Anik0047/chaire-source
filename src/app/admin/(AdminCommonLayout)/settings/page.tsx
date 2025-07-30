import React from "react";
import { Metadata } from 'next';
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import UpdateSettings from "@/components/admin/settings/UpdateSettings";

export const metadata: Metadata = {
  title: "Dashboard | Settings",
  description:
    "This is settings page for admin",
  // other metadata
};
const SettingsPage = () => {
  return <div>
    <PageBreadcrumb pageTitle="Settings" />

    <UpdateSettings />
  </div>;
};

export default SettingsPage;
