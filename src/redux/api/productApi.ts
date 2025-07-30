/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const productApi = baseApi.enhanceEndpoints({ addTagTypes: ["Products"] }).injectEndpoints({
    endpoints: (builder) => ({
        // --------------------------------- Admin Product Endpoints ---------------------------------
        //create product 
        createProduct: builder.mutation({
            query: (data) => {
                return {
                    url: "/product",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
        }),

        //get all dashboard products
        getAllDashboardProducts: builder.query({
            query: ({ searchTerm = "", page = 1, limit = 10 }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append("searchTerm", searchTerm);
                params.append("page", page);
                params.append("limit", limit);
                return {
                    url: `/product/dashboard?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Products"],
        }),
    }),
});

export const {
    useGetAllDashboardProductsQuery,
    useCreateProductMutation
} = productApi;