import { baseApi } from "./baseApi";


const staffApi = baseApi.enhanceEndpoints({ addTagTypes: ["Staffs"] }).injectEndpoints({
    endpoints: (builder) => ({

        //login an staff
        staffLogIn: builder.mutation({
            query: (data) => {
                return {
                    url: "/admin/login",
                    method: "POST",
                    body: data,
                };
            },
        }),


        //staff sign up
        staffSignUp: builder.mutation({
            query: (data) => {
                return {
                    url: "/admin",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Staffs"],
        }),

        //get all staffs
        getAllStaffs: builder.query({
            query: ({ searchTerm = "", page = 1, limit = 10 }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append("searchTerm", searchTerm);
                params.append("page", page);
                params.append("limit", limit);
                return {
                    url: `/admin?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Staffs"],
        }),

        //get staff by _id (logged in staff info)
        getStaffById: builder.query({
            query: (_id) => {

                return {
                    url: `/admin/loggedAdmin/${_id}`,
                    method: "GET",
                };
            },
            providesTags: ["Staffs"],
        }),


        //update Admin
        updateStaff: builder.mutation({
            query: (data) => {
                return {
                    url: `/admin`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["Staffs"],
        }),

        //delete Admin
        deleteStaff: builder.mutation({
            query: (data) => {
                return {
                    url: `/admin`,
                    method: "DELETE",
                    body: data
                };
            },
            invalidatesTags: ["Staffs"],
        }),

    }),
});

export const {
    // useAdminLogInMutation,
    // useAdminSignUpMutation,
    useGetAllStaffsQuery,
    // useGetAdminByIdQuery,
    // useUpdateAdminMutation,
    // useDeleteAdminMutation
} = staffApi;