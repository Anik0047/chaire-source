'use client'

import { useState } from 'react';
import ComponentCard from '../common/ComponentCard'
import DashboardPagination from '../customUI/pagination/Pagination';
import AttributeTable from './AttributeTable';
import AddAttribute from './AddAttribute';


const AttributePageComponent = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    return (
        <div className="space-y-6">
            <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
                <div>
                    <AttributeTable />

                    {/* Pagination */}
                    <div>
                        <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
                    </div>
                </div>
            </ComponentCard>

            {addModalOpen && (
                <>
                    <AddAttribute
                        open={addModalOpen}
                        onOpenChange={setAddModalOpen}
                    />
                </>
            )}
        </div>
    )
}

export default AttributePageComponent