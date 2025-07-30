'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import Badge from "../customUI/badge/Badge";
import { Pencil, Trash } from "lucide-react";
import DeleteCategory from "./DeleteSubcategory";
import { ICategoryInterface, ISubcategoryInterface } from "@/interfaces";
import EditCategory from "./EditSubcategory";


const SubcategoryTable = ({ subcategoryList }: { subcategoryList: ISubcategoryInterface[] }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSubcategoryData, setSelectedCategoryData] = useState<ICategoryInterface | undefined>(undefined);

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
                                    Sub category Image
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Sub category Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Sub category Serial
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
                            {subcategoryList.map((subcategory: ISubcategoryInterface, i: number) => (
                                <TableRow key={subcategory._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={subcategory.subcategory_logo || ''}
                                                    alt={subcategory.subcategory_name || ''}
                                                />
                                            </div>
                                            {/* <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {subcategory.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {subcategory.user.role}
                                                </span>
                                            </div> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {subcategory.subcategory_name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                subcategory.subcategory_status === "active"
                                                    ? "success"
                                                    : subcategory.subcategory_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {subcategory.subcategory_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showEditModal(subcategory)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showDeleteModal(subcategory)}>
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

            {isEditModalOpen && selectedSubcategoryData && (
                <EditCategory
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedSubcategoryData={selectedSubcategoryData}
                />
            )}

            {isDeleteModalOpen && selectedSubcategoryData && (
                <DeleteCategory
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedSubcategoryData={selectedSubcategoryData}
                />
            )}
        </div>
    )
}

export default SubcategoryTable