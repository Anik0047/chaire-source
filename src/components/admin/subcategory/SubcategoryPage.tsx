'use client'

import { useState } from 'react';
import ComponentCard from '../common/ComponentCard'
import CategoryTable from './SubcategoryTable'
import DashboardPagination from '../customUI/pagination/Pagination';
import AddSubcategory from './AddSubcategory';
import { useGetAllDashboardSubcategoriesQuery } from '@/redux/api/subcategoryApi';
import SubcategoryTable from './SubcategoryTable';


const SubcategoryPageComponent = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const {data: subcategories} = useGetAllDashboardSubcategoriesQuery({ page, limit });
    const subcategoryList = subcategories?.data || [];
    return (
        <div className="space-y-6">
            <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
                <div>
                    <SubcategoryTable subcategoryList={subcategoryList} />

                    {/* Pagination */}
                    <div>
                        <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
                    </div>
                </div>
            </ComponentCard>

            {addModalOpen && (
                <>
                    <AddSubcategory
                        open={addModalOpen}
                        onOpenChange={setAddModalOpen}
                    />
                </>
            )}
        </div>
    )
}

export default SubcategoryPageComponent