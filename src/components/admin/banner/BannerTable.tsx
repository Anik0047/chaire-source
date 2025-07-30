'use client';

import { IBanner } from "@/interfaces";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../customUI/table";
import Image from "next/image";
import Badge from "../customUI/badge/Badge";
import { Pencil, Trash } from "lucide-react";
import noImg from "../../../../public/no-image.png";


const BannerTable = ({bannersList}:{bannersList: IBanner[]}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedBannerData, setSelectedBannerData] = useState<IBanner | undefined>(undefined);
    
    // Edit modal
    const showEditModal = (bannersData: IBanner) => {
        setSelectedBannerData(bannersData);
        setIsEditModalOpen(true);
    };

    // Delete modal
    const showDeleteModal = (bannersData: IBanner) => {
        setSelectedBannerData(bannersData);
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
                                    Banner Image
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Banner Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Banner Serial
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
                            {bannersList.map((banners: IBanner, i: number) => (
                                <TableRow key={banners._id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={banners.banner_image ? banners.banner_image : noImg}
                                                    alt={banners.banner_title || ''}
                                                />
                                            </div>
                                            {/* <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {banners.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {banners.user.role}
                                                </span>
                                            </div> */}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {banners.banner_title}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 capitalize">
                                        <Badge
                                            size="sm"
                                            color={
                                                banners.banner_status === "active"
                                                    ? "success"
                                                    : banners.banner_status === "in-active"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {banners.banner_status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => showEditModal(banners)}>
                                                <Pencil className="w-4 h-4 hover:text-brand-500 transition-all duration-200" />
                                            </button>

                                            <button onClick={() => showDeleteModal(banners)}>
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

            {/* {isEditModalOpen && selectedBannerData && (
                <EditBanner
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedBannerData={selectedBannerData}
                />
            )} */}

            {/* {isDeleteModalOpen && selectedBannerData && (
                <DeleteBanner
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedBannerData={selectedBannerData}
                />
            )} */}
        </div>
    )
}

export default BannerTable