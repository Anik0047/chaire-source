'use client';

import { IStaff } from "@/interfaces";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import { useGetAllStaffsQuery } from "@/redux/api/staffApi";
import Image from "next/image";
import Badge from "../customUI/badge/Badge";
import { Pencil, Trash } from "lucide-react";
import noImg from "../../../../public/no-image.png";
import DeleteStaff from "./DeleteStaff";
import EditStaff from "./EditStaff";


const StaffTable = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedStaffData, setSelectedStaffData] = useState<IStaff | undefined>(undefined);
    const { data: staffs, isLoading } = useGetAllStaffsQuery({});
    console.log('staffs >>>>>>>>>', staffs);
    const staffList = staffs?.data || [];
    // Edit modal
    const showEditModal = (staffData: IStaff) => {
        setSelectedStaffData(staffData);
        setIsEditModalOpen(true);
    };

    // Delete modal
    const showDeleteModal = (staffData: IStaff) => {
        setSelectedStaffData(staffData);
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
                            {staffList.map((staff: IStaff, i: number) => (
                                <TableRow key={staff._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={staff.admin_profile ? staff.admin_profile : noImg}
                                                    alt={staff.admin_name || ''}
                                                />
                                            </div>
                                            {/* <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {staff.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {staff.user.role}
                                                </span>
                                            </div> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {staff.admin_name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                staff.admin_status === "active"
                                                    ? "success"
                                                    : staff.admin_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {staff.admin_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showEditModal(staff)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showDeleteModal(staff)}>
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

            {isEditModalOpen && selectedStaffData && (
                <EditStaff
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedStaffData={selectedStaffData}
                />
            )}

            {isDeleteModalOpen && selectedStaffData && (
                <DeleteStaff
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedStaffData={selectedStaffData}
                />
            )}
        </div>
    )
}

export default StaffTable