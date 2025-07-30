/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const BannerApi = baseApi.enhanceEndpoints({ addTagTypes: ["Banners"] }).injectEndpoints({
    endpoints: (builder) => ({

        //create product Banners
        createBanners: builder.mutation({
            query: (data) => {
                return {
                    url: "/banner",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Banners"],
        }),

        //get all the Banners
        getAllBanners: builder.query({
            query: (searchTerm) => {
                const queryParam = searchTerm ? `?searchTerm=${searchTerm}` : '';
                return {
                    url: `/banner${queryParam}`,
                    method: 'GET',
                };
            },
            providesTags: ["Banners"],
        }),

        //get all dashboard Banners
        getAllDashboardBanners: builder.query({
            query: ({ searchTerm = "", page = 1, limit = 10 }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append("searchTerm", searchTerm);
                params.append("page", page);
                params.append("limit", limit);
                return {
                    url: `/banner/dashboard?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Banners"],
        }),

        //update Banners
        updateBanners: builder.mutation({
            query: (data) => {
                return {
                    url: `/banner`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["Banners"],
        }),

        //delete a Banner
        deleteBanners: builder.mutation({
            query: (data) => {
                return {
                    url: `/banner`,
                    method: "DELETE",
                    body: data
                };
            },
            invalidatesTags: ["Banners"],
        }),
    }),
});

export const {
    useCreateBannersMutation,
    useGetAllBannersQuery,
    useGetAllDashboardBannersQuery,
    useUpdateBannersMutation,
    useDeleteBannersMutation
} = BannerApi;