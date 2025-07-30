"use client";

import React from "react";

export default function AdminLayoutSkeleton() {

    return (
        <div className="min-h-screen xl:flex overflow-x-hidden">
            {/* Sidebar Skeleton */}
            <div className="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 w-[290px]">
                <div className="py-8 flex justify-start">
                    <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>

        <div className="flex flex-col gap-8 px-2">
          {/* Menu Section */}
          <div>
            <div className="mb-4 h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 animate-pulse rounded bg-gray-100 dark:bg-gray-800"
                ></div>
              ))}
            </div>
          </div>

          {/* Others Section */}
          <div>
            <div className="mb-4 h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 animate-pulse rounded bg-gray-100 dark:bg-gray-800"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

            {/* Main Content Skeleton */}
            <div className="flex-1 ml-[290px] w-full">
                {/* Header Skeleton */}
                <div className="sticky top-0 min-w-screen bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-99999 h-16 flex items-center px-6">
                    <div className="flex items-center justify-between w-full">
                        <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

        {/* Content Skeleton */}
        <div className="mx-auto max-w-[--breakpoint-2xl] p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Page Title */}
            <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800"
                ></div>
              ))}
            </div>

            {/* Table Skeleton */}
            <div className="mt-8">
              <div className="h-64 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
