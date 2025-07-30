
import React from 'react'
import CategoryPageComponent from '@/components/admin/category/CategoryPage';
import PageBreadcrumb from '@/components/admin/common/PageBreadCrumb'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dashboard | Categories",
    description:
        "This is categories table page for admin",
    // other metadata
};

const CategoriesPage = () => {
    return (
        <div>
            <PageBreadcrumb pageTitle="Categories" />

            <CategoryPageComponent />
        </div>
    )
}

export default CategoriesPage;
