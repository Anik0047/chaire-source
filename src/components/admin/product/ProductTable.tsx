'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import Badge from "../customUI/badge/Badge";
import { Eye, Pencil, Trash } from "lucide-react";
import { IProductInterface } from "@/interfaces";
import ProductDetails from "./ProductDetails";




const ProductTable = ({ productsList }: { productsList: IProductInterface[] }) => {
    console.log('productsList >>>>>>>>>', productsList);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedProductData, setSelectedProductData] = useState<IProductInterface | undefined>(undefined);

    // Edit modal
    const showEditModal = (productData: IProductInterface) => {
        setSelectedProductData(productData);
        setIsEditModalOpen(true);
    };

    // Delete modal
    const showDeleteModal = (productData: IProductInterface) => {
        setSelectedProductData(productData);
        setIsDeleteModalOpen(true);
    };

    // Details modal
    const showDetailsModal = (productData: IProductInterface) => {
        setSelectedProductData(productData);
        setIsDetailsModalOpen(true);
    };

    const handleDetailsOk = () => {
        setIsDetailsModalOpen(false);
    };

    const handleDetailsCancel = () => {
        setIsDetailsModalOpen(false);
    };
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    SL
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Product Image
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Product Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Product Price
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Selling Price
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Category
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Sub category
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Status
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {productsList?.map((product: IProductInterface, i: number) => (
                                <TableRow key={product._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={product?.thumbnail_image || ''}
                                                    alt={product.product_name || ''}
                                                />
                                            </div>
                                            {/* <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {product.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {product.user.role}
                                                </span>
                                            </div> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {product.product_name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {product?.product_price && product?.product_price.toLocaleString("bn-BN", {
                                            style: "currency",
                                            currency: "BDT",
                                        })}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {product?.product_discount_price && product?.product_discount_price.toLocaleString("bn-BN", {
                                            style: "currency",
                                            currency: "BDT",
                                        })}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {typeof product.category_id === "object" && product.category_id !== null && "category_name" in product.category_id
                                            ? product.category_id.category_name
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {typeof product.subcategory_id === "object" && product.subcategory_id !== null && "subcategory_name" in product.subcategory_id
                                            ? product.subcategory_id.subcategory_name
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                product.product_status === "active"
                                                    ? "success"
                                                    : product.product_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {product.product_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showDetailsModal(product)}>
                                                <Eye className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showEditModal(product)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showDeleteModal(product)}>
                                                <Trash className="w-4 h-4 hover:text-red-500 transition-all duration-200" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {isDetailsModalOpen && selectedProductData && (
                <ProductDetails
                    open={isDetailsModalOpen}
                    onOpenChange={setIsDetailsModalOpen}
                    productData={selectedProductData}
                />
            )}

            {/* {isEditModalOpen && selectedProductData && (
                <EditProduct
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedProductData={selectedProductData}
                />
            )} */}

            {/* {isDeleteModalOpen && selectedProductData && (
                <DeleteProduct
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedProductData={selectedProductData}
                />
            )} */}
        </div>
    )
}

export default ProductTable