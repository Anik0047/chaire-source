import AttributePageComponent from "@/components/admin/attribute/AttributePage";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | Attributes",
  description:
    "This is attributes table page for admin",
  // other metadata
};

const AttributesPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Attributes" />

      <AttributePageComponent />
    </div>
  )
};

export default AttributesPage;
