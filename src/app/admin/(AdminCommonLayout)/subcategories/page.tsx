import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import SubcategoryPageComponent from "@/components/admin/subcategory/SubcategoryPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | Subcategories",
  description:
    "This is sub categories table page for admin",
  // other metadata
};

const SubcategoriesPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Subcategories" />

      <SubcategoryPageComponent />
    </div>
  )
};

export default SubcategoriesPage;
