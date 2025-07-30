
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '@/config';
import { getSession } from 'next-auth/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
        prepareHeaders: async (headers, { getState }) => {
            // const state = getState() as RootState;
            // const token = state?.user?.token;
            // Get NextAuth session token
            const session = await getSession();
            const accessToken = session?.accessToken;

            // const verifyToken = localStorage.getItem("verify-token");

            // if (token) {
            //     headers.set('authorization', `Bearer ${token}`)
            // }

            // // Set verify-token only when needed (for password reset routes)
            // if (verifyToken) {
            //     headers.set('authorization', verifyToken);
            // }

            // if (verifyToken) {
            //     headers.set('authorization', verifyToken); // For OTP submission
            // } else if (token) {
            //     headers.set('authorization', `Bearer ${accessToken}`);
            //     // headers.set('authorization', `Bearer ${token}`); // For authenticated requests
            // }
            // Only use the backend JWT token
            if (session?.accessToken) {
                headers.set('authorization', `Bearer ${session.accessToken}`);
            }

            return headers
        },
        credentials: 'include',
    }),
    tagTypes: ["SiteSettings", "Users", "Categories", "SubCategories", "Products", "Orders", "Banners", "Carts", "Addresses", "Staffs"],
    endpoints: () => ({})
})