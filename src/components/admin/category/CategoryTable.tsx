'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import Badge from "../customUI/badge/Badge";
import { Delete, Edit, Pencil, Trash } from "lucide-react";
import DeleteCategory from "./DeleteCategory";
import { ICategoryInterface } from "@/interfaces";
import EditCategory from "./EditCategory";
import { useGetAllDashboardCategoriesQuery } from "@/redux/api/categoryApi";

// Define the table data using the interface
const tableData: ICategoryInterface[] = [
    {
        "_id": "687c72c00f01985ce07a71ab",
        "category_name": "Chair",
        "category_slug": "Chair",
        "category_logo": "https://cit-node.blr1.cdn.digitaloceanspaces.com/chair_source_image/53e9490a-c745-4c6e-87be-993e0ae7b6b0-chair.webp",
        "category_serial": 1,
        "category_status": 'active'
    },
    {
        "_id": "687c73710f01985ce07a71b0",
        "category_name": "Table",
        "category_slug": "Table",
        "category_logo": "https://cit-node.blr1.cdn.digitaloceanspaces.com/chair_source_image/d1e1eaf7-4bb4-484a-bb1b-112c6c314f38-table cat.webp",
        "category_serial": 2,
        "category_status": 'active'
    },
    {
        "_id": "687c73800f01985ce07a71b4",
        "category_name": "Sofa",
        "category_slug": "Sofa",
        "category_logo": "https://cit-node.blr1.cdn.digitaloceanspaces.com/chair_source_image/b4effc6d-1b8f-474c-acfa-d30e6ffa1746-sofa cat.webp",
        "category_serial": 3,
        "category_status": 'active'
    },
    {
        "_id": "687c738e0f01985ce07a71b8",
        "category_name": "Storage",
        "category_slug": "Storage",
        "category_logo": "https://cit-node.blr1.cdn.digitaloceanspaces.com/chair_source_image/d0813d02-c407-49c6-acfd-331e01d2e2fb-storage cat.webp",
        "category_serial": 4,
        "category_status": 'in-active'
    }
]

const CategoryTable = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedCategoryData, setSelectedCategoryData] = useState<ICategoryInterface | undefined>(undefined);
    // const { data: categories, isLoading } = useGetAllDashboardCategoriesQuery({});
    // console.log('categories >>>>>>>>>', categories);
    // Edit modal
    const showEditModal = (categoryData: ICategoryInterface) => {
        setSelectedCategoryData(categoryData);
        setIsEditModalOpen(true);
    };

    // Delete modal
    const showDeleteModal = (categoryData: ICategoryInterface) => {
        setSelectedCategoryData(categoryData);
        setIsDeleteModalOpen(true);
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
                                    Category Image
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Category Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Category Serial
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
                            {tableData.map((category, i) => (
                                <TableRow key={category._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={category.category_logo || ''}
                                                    alt={category.category_name || ''}
                                                />
                                            </div>
                                            {/* <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {category.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {category.user.role}
                                                </span>
                                            </div> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {category.category_name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                category.category_status === "active"
                                                    ? "success"
                                                    : category.category_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {category.category_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showEditModal(category)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showDeleteModal(category)}>
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

            {isEditModalOpen && selectedCategoryData && (
                <EditCategory
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedCategoryData={selectedCategoryData}
                />
            )}

            {isDeleteModalOpen && selectedCategoryData && (
                <DeleteCategory
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedCategoryData={selectedCategoryData}
                />
            )}
        </div>
    )
}

export default CategoryTable