import React from "react";
import { Metadata } from 'next';
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import ProductPageComponent from "@/components/admin/product/ProductPage";

export const metadata: Metadata = {
  title: "Dashboard | Products",
  description:
    "This is products page for admin",
  // other metadata
};
const ProductsPage = () => {
  return <div>
    <PageBreadcrumb pageTitle="Products" />

    <ProductPageComponent />
  </div>;
};

export default ProductsPage;
