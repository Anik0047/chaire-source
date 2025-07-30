'use client'

import { useState } from 'react';
import ComponentCard from '../common/ComponentCard'

import DashboardPagination from '../customUI/pagination/Pagination';
import ProductTable from './ProductTable';
import { useGetAllDashboardProductsQuery } from '@/redux/api/productApi';
import { reduxRefetchValues } from '@/redux/constant';


const ProductPageComponent = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const { data: products, isLoading } = useGetAllDashboardProductsQuery({}, reduxRefetchValues);
    console.log('products >>>>>>>>>', products);

    const productsList = products?.data || [];
    return (
        <div className="space-y-6">
            <ComponentCard buttonTitle='Add' setAddModalOpen={setAddModalOpen}>
                <div>
                    <ProductTable productsList={productsList} />

                    {/* Pagination */}
                    <div>
                        <DashboardPagination limit={limit} page={page} setLimit={setLimit} setPage={setPage} totalData={20} />
                    </div>
                </div>
            </ComponentCard>

            {addModalOpen && (
                <>
                    {/* <AddCategory
                        open={addModalOpen}
                        onOpenChange={setAddModalOpen}
                    /> */}
                </>
            )}
        </div>
    )
}

export default ProductPageComponent