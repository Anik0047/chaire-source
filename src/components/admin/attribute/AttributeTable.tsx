'use client'
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import Badge from "../customUI/badge/Badge";
import { Eye, Pencil, Trash } from "lucide-react";
import { IAttribute } from "@/interfaces";
import AttributeValues from "./AttributeValues";
import EditAttribute from "./EditAttribute";
import DeleteAttribute from "./DeleteAttribute";


// Define the table data using the interface
const tableData: IAttribute[] = [
    {
        "_id": "68808722b26ed9ca3cc73571",
        "attribute_name": "material",
        "attribute_status": "active",
        "attribute_values": [
            {
                "attribute_value_name": "Black Fabric With Headrest",
                "attribute_value_status": "active",
                "_id": "68808722b26ed9ca3cc73572"
            }
        ]
    }
]

const AttributeTable = () => {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedAttributeData, setSelectedAttributeData] = useState<IAttribute | undefined>(undefined);

    // Edit modal
    const showEditModal = (attributeData: IAttribute) => {
        setSelectedAttributeData(attributeData);
        setIsEditModalOpen(true);
    };

    // Delete modal
    const showDeleteModal = (attributeData: IAttribute) => {
        setSelectedAttributeData(attributeData);
        setIsDeleteModalOpen(true);
    };

    // View modal
    const showViewModal = (attributeData: IAttribute) => {
        setSelectedAttributeData(attributeData);
        setIsViewModalOpen(true);
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
                                    Attribute Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Attribute Values
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
                            {tableData.map((attribute, i) => (
                                <TableRow key={attribute._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {attribute.attribute_name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <Eye className="w-4 h-4 hover:text-brand-500 transition-all duration-200 cursor-pointer" onClick={() => showViewModal(attribute)} />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                attribute.attribute_status === "active"
                                                    ? "success"
                                                    : attribute.attribute_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {attribute.attribute_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showEditModal(attribute)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200 cursor-pointer" />
                                            </button>

                                            <button onClick={() => showDeleteModal(attribute)}>
                                                <Trash className="w-4 h-4 hover:text-red-500 transition-all duration-200 cursor-pointer" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {isViewModalOpen && selectedAttributeData && (
                <AttributeValues
                    setIsViewModalOpen={setIsViewModalOpen}
                    selectedAttributeData={selectedAttributeData}
                />
            )}


            {isEditModalOpen && selectedAttributeData && (
                <EditAttribute
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedAttributeData={selectedAttributeData}
                />
            )}

            {isDeleteModalOpen && selectedAttributeData && (
                <DeleteAttribute
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedAttributeData={selectedAttributeData}
                />
            )}
        </div>
    )
}

export default AttributeTable