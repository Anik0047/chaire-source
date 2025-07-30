'use client';

import { useState } from "react";
import ComponentCard from "../common/ComponentCard";
import StaffTable from "./StaffTable";
import DashboardPagination from "../customUI/pagination/Pagination";
import AddStaff from "./AddStaff";

const StaffPageComponent = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    return (
        <div className="space-y-6">
            <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
                <div>
                    <StaffTable />

                    {/* Pagination */}
                    <div>
                        <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
                    </div>
                </div>
            </ComponentCard>

            {addModalOpen && (
                <>
                    <AddStaff
                        open={addModalOpen}
                        onOpenChange={setAddModalOpen}
                    />
                </>
            )}
        </div>
    )
}

export default StaffPageComponent