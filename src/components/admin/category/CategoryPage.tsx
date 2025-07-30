'use client'

import { useState } from 'react';
import ComponentCard from '../common/ComponentCard'
import CategoryTable from './CategoryTable'
import AddCategory from './AddCategory';
import DashboardPagination from '../customUI/pagination/Pagination';


const CategoryPageComponent = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    return (
        <div className="space-y-6">
            <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
                <div>
                    <CategoryTable />

                    {/* Pagination */}
                    <div>
                        <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
                    </div>
                </div>
            </ComponentCard>

            {addModalOpen && (
                <>
                    <AddCategory
                        open={addModalOpen}
                        onOpenChange={setAddModalOpen}
                    />
                </>
            )}
        </div>
    )
}

export default CategoryPageComponent