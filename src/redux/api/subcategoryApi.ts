/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const subcategoryApi = baseApi.enhanceEndpoints({ addTagTypes: ["Subcategories"] }).injectEndpoints({
    endpoints: (builder) => ({

        //create product categories
        createSubcategory: builder.mutation({
            query: (data) => {
                return {
                    url: "/subcategory",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Subcategories"],
        }),

        //get all the subcategories
        getAllSubcategories: builder.query({
            query: (searchTerm) => {
                const queryParam = searchTerm ? `?searchTerm=${searchTerm}` : '';
                return {
                    url: `/subcategory${queryParam}`,
                    method: 'GET',
                };
            },
            providesTags: ["Subcategories"],
        }),

        //get all dashboard subcategories
        getAllDashboardSubcategories: builder.query({
            query: ({ searchTerm = "", page = 1, limit = 10 }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append("searchTerm", searchTerm);
                params.append("page", page);
                params.append("limit", limit);
                return {
                    url: `/subcategory/dashboard?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Subcategories"],
        }),

        //update subcategory
        updateSubcategory: builder.mutation({
            query: (data) => {
                return {
                    url: `/subcategory`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["Subcategories"],
        }),

        //delete a subcategory
        deleteSubcategory: builder.mutation({
            query: (data) => {
                return {
                    url: `/subcategory`,
                    method: "DELETE",
                    body: data
                };
            },
            invalidatesTags: ["Subcategories"],
        }),
    }),
});

export const {
    useCreateSubcategoryMutation,
    useGetAllSubcategoriesQuery,
    useGetAllDashboardSubcategoriesQuery,
    useUpdateSubcategoryMutation,
    useDeleteSubcategoryMutation,
} = subcategoryApi;