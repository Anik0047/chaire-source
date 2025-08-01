'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "../button/Button";

type DashboardPaginationProps = {
    limit: number;
    page: number;
    setPage: (page: number) => void;
    setLimit: (limit: number) => void;
    totalData: number;
}

const DashboardPagination = ({ limit, page, setPage, setLimit, totalData }: DashboardPaginationProps) => {
    const lastPage = Math.ceil(totalData / limit);
    const maxPageButtons = 5; // Maximum number of pages to show in pagination
    const [jumpPage, setJumpPage] = useState("");

    const handleRowsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPage(1);
        setLimit(parseInt(event.target.value, 10));
    };

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
    };

    const handlePageJump = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const pageNumber = Math.max(1, Math.min(lastPage, parseInt(jumpPage, 10)));
        if (!isNaN(pageNumber)) {
            setPage(pageNumber);
            setJumpPage("");
        }
    };

    const getPageButtons = () => {
        const pageButtons = [];
        let startPage = Math.max(1, page - Math.floor(maxPageButtons / 2));
        const endPage = Math.min(lastPage, startPage + maxPageButtons - 1);

        if (endPage - startPage < maxPageButtons - 1) {
            startPage = Math.max(1, endPage - maxPageButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    type="button"
                    className={`border  px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 rounded-md ${page === i
                        ? "bg-brand-400 text-white"
                        : "bg-white text-gray-600 hover:bg-brand-100"
                        }`}
                >
                    {i}
                </button>
            );
        }

        return pageButtons;
    };

    return (
        <div className="flex justify-end sm:text-sm gap-y-2 text-[10px] my-6 flex-wrap">
            {/* Rows per page selector */}
            <div className=" flex items-center gap-2">
                <label className="text-gray-500 font-semibold" htmlFor="rows_number">
                    Rows:
                </label>
                <select
                    onChange={handleRowsChange}
                    value={limit}
                    id="rows_number"
                    className="block w-full px-1 sm:px-2 py-1 sm:py-3 text-gray-700 bg-white border border-gray-200 rounded-md"
                >
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="500">500</option>
                </select>
            </div>

            {/* Previous button */}
            <button
                onClick={page > 1 ? () => setPage(page - 1) : undefined}
                disabled={page === 1}
                type="button"
                className={`border flex items-center justify-center  px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 capitalize bg-white rounded-md text-sm ${page === 1
                    ? "text-gray-400"
                    : "hover:bg-brand-400 text-gray-600 hover:text-white"
                    }`}
            >
                <ChevronLeft />
            </button>

            {/* Page numbers */}
            {lastPage > maxPageButtons && page > Math.floor(maxPageButtons / 2) && (
                <button
                    onClick={() => setPage(1)}
                    type="button"
                    className="border  px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 rounded-md bg-white text-gray-600 hover:bg-brand-100"
                >
                    1
                </button>
            )}
            {lastPage > maxPageButtons &&
                page > Math.floor(maxPageButtons / 2) + 1 && (
                    <span className="px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 text-gray-600">
                        ...
                    </span>
                )}
            {getPageButtons()}
            {lastPage > maxPageButtons &&
                page < lastPage - Math.floor(maxPageButtons / 2) && (
                    <span className="px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 text-gray-600">
                        ...
                    </span>
                )}
            {lastPage > maxPageButtons && page < lastPage - maxPageButtons / 2 && (
                <button
                    onClick={() => setPage(lastPage)}
                    type="button"
                    className="border  px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 rounded-md bg-white text-gray-600 hover:bg-brand-100"
                >
                    {lastPage}
                </button>
            )}

            {/* Next button */}
            <button
                onClick={page < lastPage ? () => setPage(page + 1) : undefined}
                disabled={page === lastPage}
                type="button"
                className={`border flex items-center justify-center  px-1.5 py-1 mx-[1px] sm:mx-1 sm:px-2 sm:py-1.5 md:py-2 md:px-3 capitalize bg-white rounded-md ${page === lastPage
                    ? "text-gray-400"
                    : "hover:bg-brand-400 text-gray-600 hover:text-white"
                    }`}
            >
                <ChevronRight />
            </button>

            {/* Page jump input - Only show if lastPage exceeds maxPageButtons */}
            {lastPage > maxPageButtons && (
                <form
                    onSubmit={handlePageJump}
                    className="ml-4 flex items-center gap-2"
                >
                    <label htmlFor="page_jump" className="text-gray-500 font-semibold">
                        Go to page:
                    </label>
                    <input
                        type="number"
                        onWheel={(e) => (e.target as HTMLInputElement).blur()}
                        id="page_jump"
                        value={jumpPage}
                        placeholder="jump to page"
                        onChange={(e) => setJumpPage(e.target.value)}
                        className=" w-10 sm:w-16 px-2 py-1 border border-gray-200 rounded-md"
                        min={1}
                        max={lastPage}
                    />
                    <button
                        type="submit"
                        className="px-3 py-1 bg-brand-400 text-white rounded-md hover:bg-brand-300"
                    >
                        Go
                    </button>
                </form>
            )}
        </div>

    )
}

export default DashboardPagination