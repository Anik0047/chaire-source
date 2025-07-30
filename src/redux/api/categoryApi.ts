/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const categoryApi = baseApi.enhanceEndpoints({ addTagTypes: ["Categories"] }).injectEndpoints({
    endpoints: (builder) => ({
        // --------------------------------- Admin Category Endpoints ---------------------------------
        //create product categories
        createCategory: builder.mutation({
            query: (data) => {
                return {
                    url: "/category",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Categories"],
        }),

        //get all dashboard categories
        getAllDashboardCategories: builder.query({
            query: ({ searchTerm = "", page = 1, limit = 10 }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append("searchTerm", searchTerm);
                params.append("page", page);
                params.append("limit", limit);
                return {
                    url: `/category/dashboard?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Categories"],
        }),

        //update categories
        updateCategories: builder.mutation({
            query: (data) => {
                return {
                    url: `/category`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["Categories"],
        }),

        //delete a category
        deleteCategories: builder.mutation({
            query: (data) => {
                return {
                    url: `/category`,
                    method: "DELETE",
                    body: data
                };
            },
            invalidatesTags: ["Categories"],
        }),



        // --------------------------------- User Category Endpoints ---------------------------------

        //get all the categories
        getAllCategories: builder.query({
            query: (searchTerm) => {
                const queryParam = searchTerm ? `?searchTerm=${searchTerm}` : '';
                return {
                    url: `/category${queryParam}`,
                    method: 'GET',
                };
            },
            providesTags: ["Categories"],
        }),


    }),
});

export const {
    useCreateCategoryMutation,
    useGetAllCategoriesQuery,
    useGetAllDashboardCategoriesQuery,
    useUpdateCategoriesMutation,
    useDeleteCategoriesMutation
} = categoryApi;